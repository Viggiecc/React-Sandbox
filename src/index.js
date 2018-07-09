import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div className="App">
        <h1>Hello {this.props.name}</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Clock name="React" />
      <Clock name="React" />

    </div>
  )
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
