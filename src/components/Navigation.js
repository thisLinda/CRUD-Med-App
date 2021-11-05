import React from 'react';
import {Switch, Route, NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import Home from './Home';
import MedEditForm from './MedEditForm';
import MedTable from './MedTable';
import NotFound from './NotFound';


const Navigation = () => {
  return(
    <React.Fragment>
      <Navbar collapseOnSelect bg="primary" variant="dark" expand="lg" sticky="top">
        <Navbar.Brand as={NavLink} to="/">Medications with Possible Severe Adverse Reaction on Swallow Function</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/add">Add a New Medication</Nav.Link>
          <Nav.Link as={NavLink} to="/list">Medication List</Nav.Link>
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="main">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/add">
            <MedEditForm/>
          </Route>
          <Route path="/list">
            <MedTable/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </div>
    </React.Fragment>    
  )  
}

export default Navigation;