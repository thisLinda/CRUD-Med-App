import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {Navbar, Nav} from 'react-bootstrap';
import Home from './Home';
import CreateMed from './CreateMed';
import MedTable from './MedTable';
import medsList from '../data';

const Navigation = () => {
  const [meds, setMeds] = useState(medsList);

  // add new/created med to array with push
  const createMed = med => {
      med._id = meds.length;
      const arr = [...meds];
      arr.push(med);
      setMeds(arr);
  };

  const updateMed = med => {
    const arr = [...meds];
    arr[med._id] = med;
    setMeds(arr);
  };

  const deleteMed = medsId => {
    setMeds(meds.filter((m) => m._id !== medsId));
    console.log('inside deleteMed: ')
  };

  return(
    <Router>
      <Navbar collapseOnSelect bg="primary" variant="dark" expand="lg" sticky="top">
        <Navbar.Brand href="#home">Medications with Possible Severe Adverse Reaction on Swallow Function</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/add">Add a New Medication</Nav.Link>
          <Nav.Link href="/list">Medication List</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <br />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/add">
          <CreateMed createMed={createMed} />
        </Route>
        <Route exact path="/list">
          <MedTable meds={meds} updateMed={updateMed} deleteMed={deleteMed} />
        </Route>
      </Switch>
    </Router>
  )  
}

export default Navigation;