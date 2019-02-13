import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { createStream } from "../../actions/index";

class StreamCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  renderError = ({ touched, error }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.touched && meta.error ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You Must Enter A Title";
  }

  if (!formValues.description) {
    errors.description = "You Must Enter A Description";
  }

  return errors;
};

const formWrapped = reduxForm({
  form: "streamCreate",
  validate
})(StreamCreate);

export default connect(
  null,
  {
    createStream
  }
)(formWrapped);
