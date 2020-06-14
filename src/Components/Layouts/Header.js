import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav } from 'react-bootstrap'


const Header = (props) => {
  let { branding } = props;
  return (
    <Navbar bg="primary" expand="lg" className="mb-2">
      <Navbar.Brand className="text-white" href="/">{branding}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="ml-auto">
            <Nav.Link className="text-white" href="/">Home</Nav.Link>
            <Nav.Link className="text-white" href="/contact/add">Add Contacts</Nav.Link>
            <Nav.Link className="text-white" href="/about">About Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

Header.defaultProps = {
  branding: "My Application",
};

Header.prototype = {
  branding: PropTypes.string,
};

export default Header;

