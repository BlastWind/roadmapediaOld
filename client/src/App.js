import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/AppNavbar.js";
import ShoppingList from "./components/ShoppingList.js";
import ItemModal from "./components/itemModal.js";
import { Container } from 'reactstrap';

import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
          <ItemModal/>
          </Container>
          <ShoppingList />
        </div>
      </Provider>
    );
  }
}

export default App;
