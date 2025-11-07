## 浏览器渲染过程

1. DNS解析
2. 发送http请求
3. 浏览器响应，http请求的html，css，js图片，视频

4. 浏览器解析html生成dom树，解析css生成csssom，dom树和cssom同步进行，生成render tree
- 如果遇到script会终端渲染，这样也是为了提高性能

5. 生成渲染树，然后就是计算布局，绘制页面
6. 最后交给电脑的GPU合并图层，完成首屏渲染


## event looop

1. js是单线程，分同步任务和异步任务
2. 先执行同步任务，然后再执行异步任务，异步又分为宏任务和微任务，宏任务包括，settimeout, ajax，异步主要vue的nuxtTick，promise
3. 先执行第一轮的同步任务，然后这是开始页面渲染
3. 这时开始执行requestAnimateFarm,再执行下一轮的宏任务，执行宏任务，可能里面又包括同步和微热任务，再一次这样循环执行


## 组件传参
props, emit，function definexpose

provide inject 

pinia

useHooks

mitt  自定义事件



## ssr

1. 用户请求页面
2. 服务器加载对应的nuxt页面，执行useAsyncData，拉取数据，渲染出完整的html页面
3. 服务器返回渲染好的静态html，包括初始数据，此时用户只能看到内容不能交互
4. 水和，客户端加载对应的nuxt bundle，创建vue实例，对此服务端生成DOM结构，注入响应式和事件监听，开始水和
5. Hydration完成，页面激活，vue响应式开始接管
6. 后面完全客户端渲染



1. 浏览器请求 /home
2. 服务端执行 Vue 组件 → 渲染出 HTML
3. 服务器返回完整 HTML（含初始数据）
4. 浏览器解析 HTML 并显示页面（可见但不可交互）
5. 浏览器加载客户端 JS bundle
6. Vue 客户端应用执行 → 对比 DOM 结构（Virtual DOM）
7. Vue 绑定事件监听器、响应式状态
8. 页面“激活” → 可以交互



<!-- 前端面试全家桶 -->


### 高级前端工程师学习总结


- 前端发展，职业发展最新动态

1. 招聘网站
2. 技术博客
3. 国内外论坛

### 职业规划

1. 持续学习
2. 建立自己的作品集
3. 适当的社交，