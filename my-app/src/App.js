import React, { Component } from "react";
import Form from "./components/Form/Form";

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };

  render() {
    return <Form />;
  }
}

export default App;
