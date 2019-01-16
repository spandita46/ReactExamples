import React, { Component } from "react";
import DisplaySeason from "../displaySeason/displaySeason";
import Loader from "../loader/loader";

class App extends Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount = () => {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.setState({ lat: position.coords.latitude });
      },
      error => {
        this.setState({ errorMessage: error.message });
      }
    );
  };

  renderContent = () => {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return (
        <div>
          <DisplaySeason lat={this.state.lat} />
        </div>
      );
    }

    return <Loader size="massive" text="Detecting Location & Weather" />;
  };

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default App;
