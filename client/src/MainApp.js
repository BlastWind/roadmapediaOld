import React, { Component } from "react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
class MainApp extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <App />
        </Provider>
      </div>
    );
  }
}

export default MainApp;
