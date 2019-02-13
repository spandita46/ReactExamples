import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions/index";

class StreamEdit extends React.Component {
  componentDidMount() {
    const idOfStream = this.props.match.params.id;
    this.props.fetchStream(idOfStream);
  }

  render() {
    console.log(this.props);
    return <div>StreamEdit</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  const idOfStream = ownProps.match.params.id;
  return { stream: state.streams[idOfStream] };
};

export default connect(
  mapStateToProps,
  { fetchStream }
)(StreamEdit);
