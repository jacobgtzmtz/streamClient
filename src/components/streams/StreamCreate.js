import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends Component {
  renderInput({ input, label }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }

  onSubmit(formValues){
      console.log(formValues);

  }

  render() {
    return (
      <div className="ui container">
        <h4> Crear stream</h4>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
          <Field name="title" component={this.renderInput} label="Titulo" />
          <Field
            name="description"
            component={this.renderInput}
            label="Descripción"
          />
          <button className="ui button primary">Crear</button>
        </form>
      </div>
    );
  }
}

export default StreamCreate = reduxForm({
  form: "streamCreateForm"
})(StreamCreate);
