import React from "react";
import Modal from "../modal/Modal";
import History from "../../history";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions/index";
import { Link } from "react-router-dom";

class StreamDelete extends React.Component {
  componentDidMount() {
    const idOfStream = this.props.match.params.id;
    this.props.fetchStream(idOfStream);
  }

  renderActions = () => {
    const id = this.props.match.params.id;
    return (
      <React.Fragment>
        <button
          className="ui button negative"
          onClick={() => this.props.deleteStream(id)}
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  };

  renderContent = () => {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?";
    }

    return `Are you sure you want to delete stream with title - ${
      this.props.stream.title
    }?`;
  };

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => History.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const idOfStream = ownProps.match.params.id;
  return { stream: state.streams[idOfStream] };
};

export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(StreamDelete);
