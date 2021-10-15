import React from 'react';
import './App.css';
import SearchMeds from './components/SearchMeds';
import Data from './Data.json';

function App() {
  return (
    <div className="App">
      <SearchMeds placeholder="Enter a Medication Name" data={Data} />
    </div>
  );
}

export default App;