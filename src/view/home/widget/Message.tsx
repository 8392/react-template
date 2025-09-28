// message.tsx
import React, { useState, useLayoutEffect } from "react";
import { createRoot } from "react-dom/client";

const nextTick = (fn: () => void) => {
  // 微任务队列执行
  Promise.resolve().then(fn);
};

let root: any;
let addMessage: (msg: string, type?: string) => void;

const MessageHolder: React.FC = () => {
  const [messages, setMessages] = useState<
    { id: number; content: string; type: string }[]
  >([]);

  addMessage = (content, type = "info") => {
    const id = Date.now();
    setMessages((prev) => [...prev, { id, content, type }]);
    setTimeout(() => {
      setMessages((prev) => prev.filter((m) => m.id !== id));
    }, 3000);
  };

  return (
    <div className="message-container">
      {messages.map((m) => (
        <div key={m.id} className={`message ${m.type}`}>
          {m.content}
        </div>
      ))}
    </div>
  );
};

function getRoot() {
  if (!root) {
    const container = document.createElement("div");
    document.body.appendChild(container);
    root = createRoot(container);
    root.render(<MessageHolder />);
  }
}

export const message = {
  open(content: string, type?: string) {
    getRoot();
    nextTick(() => {
      addMessage(content, type);
    });
  },
  success(content: string) {
    message.open(content, "success");
  },
  error(content: string) {
    message.open(content, "error");
  },
};
