import React from "react";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "415828651161-k27fcqarre2n1uf1ij9f9tmvsk6bjabf.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this._auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this._auth.isSignedIn.get() });
          this._auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this._auth.isSignedIn.get() });
  };

  onSignIn = () => {
    this._auth.signIn();
  };

  onSignOut = () => {
    this._auth.signOut();
  };

  renderAuthButton = () => {
    if (this.state.isSignedIn === null) {
      return null;
    }
    if (this.state.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignOut}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui blue google button" onClick={this.onSignIn}>
          <i className="google icon" />
          Sign In With Google
        </button>
      );
    }
  };

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
