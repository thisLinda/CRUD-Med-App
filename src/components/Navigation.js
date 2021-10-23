import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {Navbar, Nav} from 'react-bootstrap'
import Home from './Home';
import CreateMed from './CreateMed';
import MedTable from './MedTable';
import medsList from '../data';

const Navigation = () => {
  const [meds, setMeds] = useState(medsList);

  // add new/created med to array with push
  const createMed = med => {
      med._id = meds.length + 1;
      const arr = [...meds];
      arr.push(med);
      setMeds(arr);
  };

  const updateMed = med => {
    const arr = [...meds];
    arr[med._id] = med;
    setMeds(arr);
  };

  return(
    <container>
      <div className="row">
        <div className="col-md-12">
          <Router>
            <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
              <Navbar.Brand href="#home">Medications with Possible Severe Adverse Reaction on Swallow Function</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
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
                <MedTable meds={meds} updateMed={updateMed} />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </container>
  )  
}

export default Navigation;