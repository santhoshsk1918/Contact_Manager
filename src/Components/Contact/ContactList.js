import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

//Context
import { Consumer } from "../../Context";

// Component Imports
import Contact from "./Contacts";


class ContactList extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          let { contacts } = value;
          return (
            <React.Fragment>
              <Row>
                {contacts.length >= 1 ? (
                  contacts.map((contact) => (
                    <Contact key={contact.id} contact={contact} />
                  ))
                ) : (
                  <Row className="w-100">
                    <Col md={3} xs={12} sm={12}></Col>
                    <Col
                      md={6}
                      xs={12}
                      sm={12}
                      className="d-flex justify-content-center mt-3"
                    >
                      <h3>No Contacts</h3>
                    </Col>
                  </Row>
                )}
              </Row>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default ContactList;
