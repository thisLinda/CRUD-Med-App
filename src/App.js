// receives meds from CreateMeds and displays in a table, TODO: route to different pages
// import {
//   BrowserRouter as Router,
//   Route, 
//   Link, 
//   Switch,
//   useRouteMatch
// } from 'react-router-dom';
// import React, { useState } from 'react';
import './App.css';
// import Container from 'react-bootstrap/Container';
import Navigation from './components/Navigation';
// import Home from './components/Home'
// import CreateMed from './components/CreateMed';
// import MedTable from './components/MedTable';
// import medsList from './data';

const App = () => {
  // const [meds, setMeds] = useState(medsList);

  // add new/created med to array with push
  // const createMed = med => {
  //     med._id = meds.length + 1;
  //     const arr = [...meds];
  //     arr.push(med);
  //     setMeds(arr);
  // };

  // const updateMed = med => {
  //   const arr = [...meds];
  //   arr[med._id] = med;
  //   setMeds(arr);
  // };

  // const deleteMed = (_id) => {
  //   setMeds(meds.filter((med) => med._id !== _id));
  // };

  // const deleteMed = med => {
  //   const arr = [...meds];
  //   arr[med._id] = med;
  //   arr.filter(_id => med !== med);
  //   setMeds(arr);
  //   console.log(deleteMed(med));
  // };

  return (
    <Navigation />
    // <Container>
    //   <div center className="container">
    //     <CreateMed createMed={createMed} />
    //     <h1>Medications with Known Possible Adverse Reactions</h1>
    //     <h2>Dysphagia</h2>
    //     <MedTable meds={meds} updateMed={updateMed} deleteMed={deleteMed} />
    //   </div>
    // </Container>
    // <Container>
    //   <Router>
    //     <div>
    //       <ul>
    //         <li>
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/add">Add a Medication</Link>
    //         </li>
    //         <li>
    //           <Link to="/medications">Medication Table</Link>
    //         </li>
    //       </ul>
    //       <Switch>
    //         <Route path="/add">
    //           <CreateMed createMed={createMed} />
    //         </Route>
    //         <Route path="/list">
    //           <h1>Medications with Known Possible Adverse Reactions</h1>
    //           <h2>Dysphagia</h2>
    //           <MedTable meds={meds} updateMed={updateMed} />
    //         </Route>
    //         <Route path="/">
    //           <Home />
    //         </Route>
    //       </Switch>
    //     </div>
    //   </Router>
    // </Container>
  );
}

export default App;