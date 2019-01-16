import React, { Component } from "react";
import "../../styles/app.css";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { styleOne: {}, styleTwo: {} };
  //   this.onMouseMove = this.onMouseMove.bind(this);
  // }

  state = { styleOne: {}, styleTwo: {} };

  transform = offset => {
    const cos = Math.cos(offset);
    const sin = Math.sin(offset);
    return {
      transform: `matrix3d(${sin}, ${-cos}, ${sin}, 0, ${-cos}, ${sin}, 0, 0, 0, ${cos}, ${cos}, ${sin}, 0, 0, 0, 1)`
    };
  };

  onMouseMove = event => {
    this.setState({
      styleOne: this.transform(-event.clientX / event.clientY),
      styleTwo: this.transform(-event.clientX / event.clientY)
    });
  };

  render() {
    return (
      <div onMouseMove={this.onMouseMove}>
        <div className="panel" style={this.state.styleOne} />
        <div className="panel" style={this.state.styleTwo} />
      </div>
    );
  }
}

export default App;
