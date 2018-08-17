import React, {PureComponent} from 'react'
import * as LC from 'literallycanvas'

const IMGSRC =
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534430360386&di=d27677fdcc76b8722a70802f377899e0&imgtype=0&src=http%3A%2F%2Ff.tx2.netease.com%2Fmonth_1411%2F14112416571076d075aadba7dc.jpeg'
export default class Exmaple2 extends PureComponent {
  render() {
    const bgImage = LC.JSONToShape({
      className: 'Image',
      data: {
        imageSrc: IMGSRC,
        x: 0,
        y: 0,
        scale: 1
      }
    })
    //创建线条
    const wirtings = [{
      "x": 105,
      "y": 152,
      "p": 0,
      "w": 0,
      "s": 0,
      size: 2,
      color: "hsla(0, 0%, 0%, 1)",
    }, {
      "x": 109,
      "y": 161,
      "p": 0,
      "w": 0,
      "s": 0,
      size: 2,
      color: "hsla(0, 0%, 0%, 1)",
    }, {
      "x": 112,
      "y": 166,
      "p": 0,
      "w": 0,
      "s": 0,
      size: 2,
      color: "hsla(0, 0%, 0%, 1)",
    }, {
      "x": 115,
      "y": 172,
      "p": 0,
      "w": 0,
      "s": 0,
      size: 2,
      color: "hsla(0, 0%, 0%, 1)",
    }]
    const wirtings2 = [
      {
        x: 305,
        y: 352,
        p: 0,
        w: 0,
        s: 0,
        size: 2,
        color: 'hsla(0, 0%, 0%, 1)'
      },
      {
        x: 309,
        y: 361,
        p: 0,
        w: 0,
        s: 0,
        size: 2,
        color: 'hsla(0, 0%, 0%, 1)'
      },
      {
        x: 312,
        y: 366,
        p: 0,
        w: 0,
        s: 0,
        size: 2,
        color: 'hsla(0, 0%, 0%, 1)'
      },
      {
        x: 315,
        y: 372,
        p: 0,
        w: 0,
        s: 0,
        size: 2,
        color: 'hsla(0, 0%, 0%, 1)'
      }
    ]
    const jsonPoints = wirtings.map(function (item) {
      return [item.x, item.y]
    })
    const jsonPoints2 = wirtings2.map(function(item) {
      return [item.x, item.y]
    })
    const jsonShape = {
      className: 'LinePath',
      data: {
        // color可以用hsla，HEX，rgba等所有颜色类型
        // 红色：hsla(0,100%,50%,1)
        pointColor: 'hsla(0, 0%, 0%, 1)',
        pointCoordinatePairs: jsonPoints,
        pointSize: 2
      }
    }
    const jsonShape2 = {
      className: 'LinePath',
      data: {
        // color可以用hsla，HEX，rgba等所有颜色类型
        // 红色：hsla(0,100%,50%,1)
        pointColor: 'hsla(0, 0%, 0%, 1)',
        pointCoordinatePairs: jsonPoints2,
        pointSize: 5
      }
    }
    const shapes = LC.JSONToShape(jsonShape)
    const shapes2 = LC.JSONToShape(jsonShape2)
    //onInit,该方法在LiterallyCanvas对象配置并绑定到元素后立即调用，获取lc实例(适用于react)
    return (
      <div className="App">
        <LC.LiterallyCanvasReactComponent
          imageURLPrefix="static/img"
          backgroundShapes={[bgImage,shapes]}
          onInit={lc => {
            lc.saveShape(shapes2)
          }}
        />
      </div>
    )
  }
}
