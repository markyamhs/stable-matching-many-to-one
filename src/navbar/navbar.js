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
      <Navbar.Brand as={Link} to="/stable-matching-many-to-one/">
        Matching Optimizier
      </Navbar.Brand>
      <Nav className="mr-5">
        <Nav.Link as={Link} to="/stable-matching-many-to-one/step1">
          1. Initialize
        </Nav.Link>
        <Nav.Link as={Link} to="/stable-matching-many-to-one/step2">
          2. Set Preferences
        </Nav.Link>
        <Button
          variant="primary"
          //   variant="outline-info"
          as={Link}
          to="/stable-matching-many-to-one/step3"
        >
          3. Begin matching
        </Button>
        <NavDropdown title="4. View Results" id="basic-nav-dropdown">
          <NavDropdown.Item
            as={Link}
            to="/stable-matching-many-to-one/step4/spreadsheets"
          >
            Spreadsheets
          </NavDropdown.Item>
          <NavDropdown.Item
            as={Link}
            to="/stable-matching-many-to-one/step4/charts"
          >
            Charts
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Log</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item
            as={Link}
            to="/stable-matching-many-to-one/step4/logtxt"
          >
            Log as txt
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
