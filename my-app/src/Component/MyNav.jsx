import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const MyNav = () => (
    <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="#">BookShop</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-nav" />
    <Navbar.Collapse id="navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">About</Nav.Link>
        <Nav.Link href="#">Browse</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default MyNav;