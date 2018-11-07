# literallycanvas的简介

- _static literallycanvas的依赖文件
- classic_style 用普通js的方式编写的用例
- react_style 基于create-react-app编写的用例
- freecanvas-demo 二次开发，基本实现了图片旋转功能
- xmind api介绍

### LiterallyCanvas是什么

Literally Canvas是一个可扩展的开源（BSD许可）HTML5绘图组件，可以用于网页中插入画图板，类似于windows自带的画图板。可以用可视化工具绘制图画，同时提供api完成相同的功能，也可以将结果导出。它依赖于React.js，所以很方便在react项目中使用。

![image](http://ydschool-online.nos.netease.com/1534505657799adf1234.png)
 
### 特性

- 基本的绘画工具
- 编码自定义绘画工具
- 平移和缩放
- 背景图、水印
- 支持Retina
- 保存和加载 JSON
- 输出图片到PNG或SVG
- 丰富的API
- 无缝接入React
- 开源

### 快速上手

1. 加载literallycanvas
- 普通方式
```
<html>
<head>
  <!-- 需要react -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.7/react-with-addons.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.7/react-dom.js"></script>
  <!-- literallycanvas的js文件 -->
  <script src="../_static/js/literallycanvas.js"></script>
  <!-- literallycanvas的css文件 -->
  <link href="../_static/css/literallycanvas.css" rel="stylesheet">
  <title>literallycanvas-with-gui</title>
</head>
<body>
  <div class="my-drawing"></div>
  <script>
    LC.init(
      document.getElementsByClassName('my-drawing')[0],
      { imageURLPrefix: '../_static/img'}
    );
  </script>
</body>
</html>
```
- react方式
```
import React, { PureComponent } from 'react'
import { LiterallyCanvasReactComponent } from 'literallycanvas'
import 'literallycanvas/lib/css/literallycanvas.css'

export default class Exmaple1 extends PureComponent {
  render() {
    return (
      <div className="App">
        <LiterallyCanvasReactComponent imageURLPrefix="static/img" />
      </div>
    )
  }
}
```
package.json
```

{
  "name": "react_style_literally",
  "version": "0.1.0",
  "private": true,
  "description": "目前版本0.4.13不支持react16以上，v5.0以上支持",
  "dependencies": {
    "react": "^15.6.0", 
    "react-dom": "^15.6.0",
    "react-scripts": "1.1.4",
    "react-router-dom": "^4.3.1",
    "literallycanvas": "0.4.13"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
}
```
(!!!官网方式不靠谱)
```
<html>
  <head>
    <!-- stylesheet -->
    <link href="/static/css/literallycanvas.css" rel="stylesheet">

    <!-- dependency: React.js -->
    <script src="//cdnjs.cloudflare.com/ajax/libs/react/0.14.7/react-with-addons.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/react/0.14.7/react-dom.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>

    <!-- Literally Canvas -->
    <script src="/static/js/literallycanvas.js"></script>
  </head>
  <body>
    <div id="root"></div>

    <script type="text/babel">
        ReactDOM.render(
            <div>
                <LC.LiterallyCanvasReactComponent imageURLPrefix="/static/img" />
            </div>,
            document.getElementById('root'));
    </script>
  </body>
</html>
```
2. 修改样式（修改画图板的宽高）

- 宽度，可以通过修改父组件宽度来修改
- 高度，原有样式为min-hight:400px,修改父组件不好使
```
.my-drawing {
  /* 宽度可自定义 */
  width: 1000px;
  /* 高度无效 */
  height: 600px;
}

/* 覆盖literally样式 */
.my-drawing .literally {
  height: 600px;
}
```

3. 原理

两个canvas叠加，一个负责渲染背景内容，一个负责渲染涂画操作

### API

- init
- shapes
- snapshot
- ...

[示例代码](https://github.com/handv/literally-canvas-demos)

### 二次开发

- 下载源码 git clone https://github.com/literallycanvas/literallycanvas.git
- 源码目录

![image](http://ydschool-online.nos.netease.com/1534505673327saf342.png)

- 基于coffee-script开发（看不懂的，可以选择读lib目录下的js）
- 打包

执行gulp命令生成新的`lib/js/literallycanvas.js`

- 如果是基于react的修改，怎么办？

1. 本地修改保持不变
2. 自己打一个npm包
3. 给该项目发起Pull Request

### 总结

- 优点：
1. 比其他开源画图工具功能更加强大，其他的只提供基本的图片展示、画笔、橡皮擦功能
2. 无缝接入react项目
3. 开源
4. 可扩展，使用API
5. 速度快
github上满足批改后台需求的最合适项目
- 缺点：
1. 更新缓慢
2. 配置文件不够细，不能满足某些需求
3. 功能不满足：
1）图片旋转(如有需要，可使用[freecanvas](https://www.npmjs.com/package/freecanvas)这个npm包，这是我基于literallycanvas开发的，增加了图片旋转功能)
2）文字添加后可移动位置
