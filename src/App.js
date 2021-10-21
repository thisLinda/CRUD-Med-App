// receives meds from CreateMeds and displays in a table, TODO: route to different pages
import React, {useState} from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'
import CreateMed from './components/CreateMed';
import MedTable from './components/MedTable';
import medsList from './data';

const App = () => {
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

  return (
    <Container>
      <div center className="container">
        <CreateMed createMed={createMed} />
        <h1>Medications with Known Possible Adverse Reactions</h1>
        <h2>Dysphagia</h2>
        <MedTable meds={meds} updateMed={updateMed} />
      </div>
    </Container>
  );
}

export default App;