```
模拟sleep函数

let sleep = (millSeconds) => {
  let startTime = new Date().getTime()
  while (new Date.getTime() < startTime + millSeconds)
}
```