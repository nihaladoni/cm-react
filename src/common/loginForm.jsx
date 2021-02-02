import React from "react";

import Joi from "joi-browser";
import Form from "./form";

class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    console.log("Submitted");
  };

  render() {
    return (
      <div style={{ width: "50vw" }} className="d-block ml-auto mr-auto">
        <h1 className="mb-5">Login</h1>
        <div className="row">
          <div className="col-9">
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("username", "Username")}
              {this.renderInput("password", "Password", "password")}

              {this.renderButton("Login")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
