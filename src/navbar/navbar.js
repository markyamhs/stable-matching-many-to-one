import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      sticky="top"
      className="d-flex justify-content-between"
    >
      <Navbar.Brand as={Link} to="/">
        Matching Optimizier
      </Navbar.Brand>
      <Nav className="mr-5">
        <Nav.Link as={Link} to="/">
          1. Initialize
        </Nav.Link>
        <Nav.Link href="#features">2. Set Preferences</Nav.Link>
        <Button variant="outline-info">3. Begin matching</Button>
        <NavDropdown title="4. View Results" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Spreadsheets</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Charts</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Log</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Log as txt</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
