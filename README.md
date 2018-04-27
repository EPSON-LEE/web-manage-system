# web-manage-system
This is is a web manage system

# 环境

2018/03/08

osx: 10.13.2

node: 8.9.4.2

react: 16.2.0

webpack: 4.1.0

- webpack4.1.0 中commonschunkplugin插件被废弃，使用splitChunks来进行分包

cross-en: 5.1.0  执行脚本的时候，读取环境，进行不同的操作

# 日志：

2018 04/27

- 增加配置式可编辑表格组件
- 目的：保证所有表格生成简单、可配置度高、所有页面的表格风格统一，应对需求变化忍耐度高

需求来源：

1. 表格中的字体根据数据不同变色显示
2. 表格中的字体根据数据不同变色显示
3. 单击表格，表格可以编辑；可编辑的类型有：普通文字类型、 Select（转换dict）。
4. raw尾操作、 页码组件

数据格式：
```
使用时再封装一层
 columns = [{
    title: '职员编号',
    width: 200，
    dataIndex: 'workerId',
    type: 'editableText',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
    payload: {
      text: 'text',
      data: ,
      dicts: {}
    }
  }]
  被转换为
   columns = [{
    title: '职员编号',
    dataIndex: 'workerId',
    width: 200,
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
    render:(payload) => <EditableText payload={payload} /> 
  }]
```
2018 04/23

搭建 express + mysql restful接口，
https://medium.com/@avanthikameenakshi/building-restful-api-with-nodejs-and-mysql-in-10-min-ff740043d4be

2018 04/20

- 处理了Node.js中的同步非阻塞
- 加入上传文件

2018 04/19

- 《一本全面的Node.js教程》https://www.nodebeginner.org/index-zh-cn.html

2018 04/17
- 完成网页左侧 nav栏布局
- 解决了引入CKEDITOR https://stackoverflow.com/questions/36535234/how-can-ckeditor-be-used-with-react-js-in-a-way-that-allows-react-to-recognize-i/38648155
- 引入HighCharts

2018 04/16
- 使用了Grid 布局(并做了简单的响应式处理)
- 删除了git HEAD分支， 并解决了HEAD分支影响到的问题 https://stackoverflow.com/questions/21335969/git-error-refname-head-is-ambiguous

2018 04/13
- css loader可以引入样式

2018 04/12
- 引入favicon

2018/03/08
- osx: 10.13.2
- node: 8.9.4.2
- react: 16.2.0
- webpack: 4.1.0
