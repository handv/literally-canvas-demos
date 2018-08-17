import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Example1 from './container/Example1'
import Example2 from './container/Example2'
import './App.css'

class App extends Component {
  // stitic/img目录放在publuc下，然后执行npm run build
  render() {
    return <Router>
        <div>
          <ul>
            <li>
              <Link to="/">example1</Link>
            </li>
            <li>
              <Link to="/example2">example2</Link>
            </li>
          </ul>
          <hr />
          <Route exact path="/" component={Example1} />
          <Route path="/example2" component={Example2} />
        </div>
      </Router>
  }
}

export default App
