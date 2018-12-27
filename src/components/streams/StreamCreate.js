import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <div className="ui container">
        <h4> Crear stream</h4>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error"
        >
          <Field name="title" component={this.renderInput} label="Titulo" />
          <Field
            name="description"
            component={this.renderInput}
            label="Descripción"
          />
          <button className="ui button primary" enabled="false">
            Crear
          </button>
        </form>
      </div>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "Debes introducir un titulo";
  }

  if (!formValues.description) {
    errors.description = "Debes introducir una descripción";
  }
  return errors;
};

export default (StreamCreate = reduxForm({
  form: "streamCreateForm",
  validate
})(StreamCreate));
