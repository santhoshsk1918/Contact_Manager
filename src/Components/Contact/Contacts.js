import React, { Component } from "react";
import PropTypes from "prop-types";
import { Col, Card } from "react-bootstrap";

// Context API
import { Consumer } from "../../Context";

class Contacts extends Component {
  state = {
    showDeails: false,
  };

  toggleView = () => {
    this.setState({ showDeails: !this.state.showDeails });
  };

  deleteContact = (dispach, id) => {
    let confirmDelete = window.confirm(
      "Are you sure you want to delete this contact?"
    );
    if (confirmDelete) {
      dispach({
        type: "DELETE_CONTACT",
        payload: id
      })
    }
  };

  render() {
    const viewBtn = (
      <i
        className="fa fa-eye-slash float-right btn"
        onClick={this.toggleView}
      ></i>
    );
    const hideBtn = (
      <i className="fa fa-eye float-right btn" onClick={this.toggleView}></i>
    );

    let { showDeails } = this.state;
    let { name, email, phone, id } = this.props.contact;

    return (
      <Consumer>
        {(value) => {
          let { dispach } = value;
          return (
            <Col xs={12} md={4} sm={12} id={"contact_" + id} className="mb-1">
              <Card>
                <Card.Header>
                  {name}
                  <i
                    className="fa fa-trash float-right btn text-danger"
                    onClick={this.deleteContact.bind(this, dispach, id)}
                  ></i>
                  {showDeails ? viewBtn : hideBtn}
                </Card.Header>
                {showDeails ? (
                  <Card.Body>
                    <ul>
                      <li>Email: {email}</li>
                      <li>Phone: {phone}</li>
                    </ul>
                  </Card.Body>
                ) : null}
              </Card>
            </Col>
          );
        }}
      </Consumer>
    );
  }
}

Contacts.defaultProps = {
  contact: { id: -1, name: "No Name", email: "No Email", phone: "No Phone" },
};

Contacts.propTypes = {
  contact: PropTypes.object
};

export default Contacts;
