import { useEffect, useRef, useState } from "react";

export default function IdleList() {
  const allItems = useRef(
    Array.from({ length: 5000 }, (_, i) => `Item ${i}`)
  );

  const [visibleItems, setVisibleItems] = useState<Array<string>>([]);
  const batchSize = 200;
  const currentIndex = useRef(0);
  const idleCallbackId = useRef<number | null>(null);

  function renderBatch(deadline: IdleDeadline) {
    const nextItems: string[] = [];

    while (
      deadline.timeRemaining() > 0 &&
      currentIndex.current < allItems.current.length
    ) {
      const end = currentIndex.current + batchSize;
      nextItems.push(...allItems.current.slice(currentIndex.current, end));
      currentIndex.current = end;
    }

    setVisibleItems((prev) => [...prev, ...nextItems]);

    if (currentIndex.current < allItems.current.length) {
      idleCallbackId.current = requestIdleCallback(renderBatch);
    }
  }

  useEffect(() => {
    idleCallbackId.current = requestIdleCallback(renderBatch);
    return () => {
      if (idleCallbackId.current) {
        cancelIdleCallback(idleCallbackId.current);
      }
    };
  }, []);

  return (
    <div>
      <h3>
        已渲染：{visibleItems.length} / {allItems.current.length}
      </h3>
      {visibleItems.map((item) => (
        <div key={item} style={styles.row}>
          {item}
        </div>
      ))}
    </div>
  );
}

const styles = {
  row: {
    height: 24,
    borderBottom: "1px solid #eee",
  },
};
