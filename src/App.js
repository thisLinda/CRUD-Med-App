import React from 'react';
import './App.css';
import SearchMeds from './components/SearchMeds';
import Data from './Data.json';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';


function App() {
  return (
    <div className="App">
      <SearchMeds placeholder="Enter a Medication Name..." data={Data} />
    </div>
  );
}

export default App;