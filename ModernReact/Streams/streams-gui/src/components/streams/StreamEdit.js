import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions/index";
import StreamForm from "./StreamForm";
import _ from "lodash";

class StreamEdit extends React.Component {
  componentDidMount() {
    const idOfStream = this.props.match.params.id;
    this.props.fetchStream(idOfStream);
  }

  onSubmit = formValues => {
    const idOfStream = this.props.match.params.id;
    this.props.editStream(idOfStream, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit A Stream</h3>
        <StreamForm
          onSubmit={this.onSubmit}
          initialValues={_.pick(this.props.stream, "title", "description")}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const idOfStream = ownProps.match.params.id;
  return { stream: state.streams[idOfStream] };
};

export default connect(
  mapStateToProps,
  { fetchStream, editStream }
)(StreamEdit);
