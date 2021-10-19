import React, {useState} from "react";
import './App.css';
// import SearchMeds from './components/SearchMeds';
import UsersMedList from './components/UsersMedList';

const App = () => {

  // const [updating, setUpdating] = useState(false);
  // const initialMed = {_id: null, brandName: '', reaction: ''};
  // const [currentMed, setCurrentMed] = useState(initialMed);

  return (
    <div className="usersMedList">
      <UsersMedList />
    </div>
  );
}

export default App;