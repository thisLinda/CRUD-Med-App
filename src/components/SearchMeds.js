// adapted from https://github.com/machadop1407/React-Search-Bar

import React, {useState} from 'react';
import './SearchMeds.css';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Data from '../Data.json';
import App from '../App';

function SearchMed() {
  const[searchTerm, setSearchTerm] = useState('');
  return (
    <div className="App">
      <input type="text" placeholder="Searrrrrch" onChange={event => {setSearchTerm(event.target.value)}}/>
      {Data.filter((val) => {
        if (searchTerm === "") {
          return val
        } else if (val.brandName.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }
      }).map((val, key) => {
        return <div className="user" key={key}>
          <p>{val.brandName}</p>
        </div>;
      })}
    </div>
  );
}

export default SearchMed;