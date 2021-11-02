// receives meds from CreateMeds and displays in a table, TODO: route to different pages
import './App.css';
import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import MedForm from './components/MedForm';
import MedTable from './components/MedTable';
import medsList from './data';

const App = () => {

  const [meds, setMeds] = useState(medsList);

  // add new/created med to array with push
  const createMed = med => {
      med._id = meds.length;
      const arr = [...meds];
      arr.push(med);
      setMeds(arr);
  };

  // rework, this is making a copy
  const updateMed = med => {
    const arr = [...meds];
    arr[med._id] = med;
    setMeds(arr);
  };

  const deleteMed = medsId => {
    setMeds(meds.filter((m) => m._id !== medsId));
    console.log('inside deleteMed: ')
  };

  return (
    <Router>
      <Navigation />
      <Container className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/add">
            <MedForm createMed={createMed} />
          </Route>
          <Route exact path="/list">
            <MedTable meds={meds} updateMed={updateMed} deleteMed={deleteMed} />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;