
## Fiber 是什么

React 16版本更新, 核心渲染算法的一次重构, 对于React的使用者几乎无感知. 其拥有将渲染拆任务分成多块分布多个帧的能力, 
将渲染任务分配优先级的能力.

## React 渲染 在引入 Fiber 前后的区别

### 引入前

React的每次更新渲染在渲染结束前(即setState -> componentDidUpdate)会一直占据JS线程. 当更新计算量较大时, 浏览器就不能
及时响应UI(如css动画)或用户的操作(鼠标点击,滚轮滑动等等)

### 引入后

React 将每个组件的更新拆分开, 每执行完一个更新后, 计算更新占用的时间, 决定释放一下js线程还是继续更新.

## 原理

一切回到React应用的起点.
ReactDOM.render(element, domContainer);
内部创建了一个ReactRoot的对象
ReactRoot 创建了FiberRoot的对象
FiberRoot
整个应用的起点
包含应用挂载的目标起点
记录整个应用更新过程的各种信息

### FiberRoot 主要属性

current: Fiber
一些组件更新时间记录值

### Fiber
每一个ReactElement对应一个Fiber对象
记录节点各种状态信息 如State, hooks
串联整个应用形成树结构
Fiber的return, child, sibling


## 借鉴

* 重构
* 匠心
* 优化思路
