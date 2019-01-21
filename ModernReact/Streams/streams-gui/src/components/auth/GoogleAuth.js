import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../../actions/index";

class GoogleAuth extends React.Component {
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
          this.onAuthChange(this._auth.isSignedIn.get());
          this._auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this._auth.signIn();
  };

  onSignOutClick = () => {
    this._auth.signOut();
  };

  renderAuthButton = () => {
    if (this.props.isSignedIn === null) {
      return null;
    }
    if (this.props.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignOutClick}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui blue google button" onClick={this.onSignInClick}>
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
const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  {
    signIn,
    signOut
  }
)(GoogleAuth);
