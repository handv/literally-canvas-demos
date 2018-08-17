import React, { PureComponent } from 'react'
import { LiterallyCanvasReactComponent } from 'literallycanvas'
//import 'literallycanvas/lib/css/literallycanvas.css' //第二种导入css的方式

export default class Exmaple1 extends PureComponent {
  render() {
    return (
      <div className="App">
        <LiterallyCanvasReactComponent imageURLPrefix="static/img" />
      </div>
    )
  }
}
