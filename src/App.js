import React, {useState} from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'
// import SearchMeds from './components/SearchMeds';
// import UsersMedList from './components/UsersMedList';
import CreateMed from './components/CreateMed';
import MedTable from './components/MedTable';
import medsList from './data';

const App = () => {

  const [meds, setMeds] = useState(medsList);

  const createMed = med => {
      med._id = meds.length + 1;
      setMeds([...meds, med]);
  };

  // const [updating, setUpdating] = useState(false);
  // const initialMed = {_id: null, brandName: '', reaction: ''};
  // const [currentMed, setCurrentMed] = useState(initialMed);

  return (
    <Container>
      <div center className="container">
        <CreateMed createMed={createMed} />
        <h1>Medications with Known Possible Adverse Reactions</h1>
        <h2>Dysphagia</h2>
        {/* <UsersMedList /> */}
        <MedTable meds={meds} />
      </div>
    </Container>
  );
}

export default App;