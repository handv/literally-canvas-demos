import React, { Component } from 'react';
import * as LC from 'freecanvas/lib/js'
import 'freecanvas/lib/css/literallycanvas.css'
import './App.css';

const IMGSRC =
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534430360386&di=d27677fdcc76b8722a70802f377899e0&imgtype=0&src=http%3A%2F%2Ff.tx2.netease.com%2Fmonth_1411%2F14112416571076d075aadba7dc.jpeg'

class App extends Component {
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
    return (
      <div className="App">
        <LC.LiterallyCanvasReactComponent
          imageURLPrefix="static/img"
          backgroundShapes={[bgImage]}
        />
      </div>
    );
  }
}

export default App;
