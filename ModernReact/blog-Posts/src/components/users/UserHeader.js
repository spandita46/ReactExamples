import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../actions";

class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

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
  { fetchUser }
)(UserHeader);
