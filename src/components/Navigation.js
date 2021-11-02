import React from 'react';
import {Navbar, Nav, NavLink} from 'react-bootstrap';

const Navigation = () => {
  return(
    <Navbar collapseOnSelect bg="primary" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand href="#home">Medications with Possible Severe Adverse Reaction on Swallow Function</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link as={NavLink} to="/add">Add a New Medication</Nav.Link>
        <Nav.Link as={NavLink} to="/list">Medication List</Nav.Link>
        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
        {/* using href breaks spa by refreshing the page and reloading the app */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )  
}

export default Navigation;