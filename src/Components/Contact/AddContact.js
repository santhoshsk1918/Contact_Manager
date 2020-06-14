import React, { Component } from "react";
import { Button, Card, Form } from "react-bootstrap";
import FormInput from "../Forms/FormInput";

import { Consumer } from "../../Context";
import { v4 } from "uuid";

class AddContact extends Component {
  nameRegexMatch = /[A-Za-z0-9]{2,}/;
  emailRegexMatch = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  phoneRegexMatch = /[7-9]{1}[0-9]{9}/;

  state = {
    name: "",
    email: "",
    phone: "",
    id: "",
    error: {
      email: "",
      phone: "",
      name: "",
    },
  };

  onFieldChange = (type, e) => {
    let value = e.target.value;
    let error = "";
    switch (type) {
      case "name":
        let nameRegex = this.nameRegexMatch.test(value);
        if (!nameRegex) {
          error = "Please enter valid name";
          this.setState({
            ...this.state,
            name: value,
            error: { ...this.state.error, name: error },
          });
        } else {
          error = "";
          this.setState({
            ...this.state,
            name: value,
            error: { ...this.state.error, name: error },
          });
        }
        break;
      case "email":
        let emailRegex = this.emailRegexMatch.test(value);

        if (!emailRegex) {
          error = "Please enter valid email";
          this.setState({
            ...this.state,
            email: value,
            error: { ...this.state.error, email: error },
          });
        } else {
          error = "";
          this.setState({
            ...this.state,
            email: value,
            error: { ...this.state.error, email: error },
          });
        }
        break;
      case "phone":
        let phoneRegex = this.phoneRegexMatch.test(value);
        console.log(phoneRegex);
        if (!phoneRegex) {
          error = "Please enter valid phone number";
          this.setState({
            ...this.state,
            phone: value,
            error: { ...this.state.error, phone: error },
          });
        } else {
          error = "";
          this.setState({
            ...this.state,
            phone: value,
            error: { ...this.state.error, phone: error },
          });
        }
        break;
      default:
        break;
    }
  };

  formSubmit = (dispach, e) => {
    e.preventDefault();
    let { name, email, phone } = this.state;
    let emailError = "", phoneError = "", nameError = ""
    let hasError = false;
    if (!this.emailRegexMatch.test(email)) {
      hasError = true;
      emailError = "Please Enter Valid Email"
    }
    if (!this.nameRegexMatch.test(name)) {
      hasError = true;
      nameError = "Please Enter Valid Name"
    }

    if (!this.phoneRegexMatch.test(phone)) {
      hasError = true;
      phoneError = "Please Enter Valid Phone"
    }

    if (hasError) {
      window.alert("Please Enter Valid Field Values");
      this.setState({
        ...this.state,
        error: {
          email:emailError,
          phone:phoneError,
          name: nameError
        },
      })
    } else {
      dispach({ type: "ADD_CONTACT", payload: { ...this.state, id: v4() } });
      this.setState({
        name: "",
        email: "",
        phone: "",
        id: "",
        error: {
          name: "",
          email: "",
          phone: "",
        },
      });
      this.props.history.push("/")
    }
  };

  render() {
    let { id, name, email, phone, error } = this.state;
    return (
      <Consumer>
        {(value) => {
          let { dispach } = value;
          return (
            <Form onSubmit={this.formSubmit.bind(this, dispach)}>
              <Card className="mt-2 mb-4">
                <Card.Header>Enter New Contact</Card.Header>
                <Card.Body>
                  <input type="hidden" value={id} />
                  <FormInput
                    label="Name"
                    id="nameField"
                    value={name}
                    name="name"
                    classes=""
                    onChangeHandler={this.onFieldChange.bind(this, "name")}
                    placeholder="Please Enter a Name"
                    type="text"
                    error={error.name}
                  ></FormInput>
                  <FormInput
                    label="Email"
                    id="emailField"
                    value={email}
                    name="email"
                    classes=""
                    onChangeHandler={this.onFieldChange.bind(this, "email")}
                    placeholder="Please Enter a Email"
                    type="text"
                    error={error.email}
                  ></FormInput>
                  <FormInput
                    label="Phone Number"
                    id="phoneField"
                    value={phone}
                    name="phone"
                    classes=""
                    onChangeHandler={this.onFieldChange.bind(this, "phone")}
                    placeholder="Please Enter a Phone Number"
                    type="text"
                    error={error.phone}
                  ></FormInput>

                  <div className="text-center w-100">
                    <Button
                      type="submit"
                      variant="primary"
                      className="text-center"
                    >
                      Submit
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Form>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
