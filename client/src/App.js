import React, { Component } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import RouterURL from "./components/RouterURL/RouterURL";
import "./App.css";
import NavBar from "./components/NavBar/NavBar"
import { Provider } from "react-redux";
import store from "./store";




export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
      <div>
      <NavBar/>

        <div className="container">
          <body>
          <RouterURL/>
          </body>
        </div>
      </div>
      </Router>
      </Provider>
    )
  }
}
