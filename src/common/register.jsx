import React from "react";
import Form from "./form";
import Joi from "joi-browser";

class Register extends Form {
  state = {
    data: { username: "", password: "", name: "" },

    errors: {},
  };
  schema = {
    username: Joi.string().email().required().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().label("Name"),
  };

  render() {
    return (
      <div style={{ width: "50vw" }} className="d-block ml-auto mr-auto">
        <h1 className="mb-5">Register</h1>
        <div className="row">
          <div className="col-9">
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("username", "Username")}
              {this.renderInput("password", "Password", "password")}
              {this.renderInput("name", "Name")}

              {this.renderButton("Register")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
