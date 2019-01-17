import React, { Component } from "react";
import { connect } from "react-redux";

class UserHeader extends Component {
  render() {
    if (!this.props.user) {
      return null;
    }

    return <div className="user-header header">{this.props.user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  let user = state.users.find(userItem => userItem.id === ownProps.userId);
  return {
    user
  };
};

export default connect(
  mapStateToProps,
  null
)(UserHeader);
