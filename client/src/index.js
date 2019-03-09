import React from "react";
import ReactDOM from "react-dom";
import MainApp from "./MainApp";
import * as serviceWorker from "./serviceWorker";
import "semantic-ui-css/semantic.min.css";
import "w3-css/w3.css";
import { Provider } from "react-redux";

ReactDOM.render(<MainApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
