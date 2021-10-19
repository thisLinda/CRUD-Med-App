// adapted from https://github.com/machadop1407/React-Search-Bar
// TODO: search by brandName and reaction

import React, {useState} from 'react';
import './SearchMeds.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

function SearchMed({placeholder, meds}) {
  const [filteredMedList, setFilteredMedList] = useState([]);
  // searchTerm represents user input and is triggered by onChange
  const[searchTerm, setSearchTerm] = useState('');

  // searchTerm becomes event
  // filter streamlines map for values desired, if empty returns current data otherwise returns new data
  const handleFilter = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    const newFilter = meds.filter((value) => {
      return value.brandName.toLowerCase().includes(searchTerm.toLowerCase());
    });
      if (searchTerm === "") {
        setFilteredMedList([]);
      } else {
        setFilteredMedList(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredMedList([]);
    setSearchTerm("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input 
          type="text" 
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredMedList.length === 0 ? (
            <SearchOutlinedIcon />
          ) : (
            <CancelPresentationOutlinedIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {/* below code returns a med from dbase into a paragraph, needs to be exported into UsersMedList on a click, need a message for 'not found' */}
      {filteredMedList.length !== 0 && (
        <div className="medListResult" key={filteredMedList._id}>
          {filteredMedList.slice(0, 5).map((value, key) => {
            return (
              <a className="medListItem" href={value.link} target="_blank">
                {/* <p>{value.brandName} </p> */}
              </a>
            );
          })}
        <Button variant="contained" sendIcon={<SendIcon />}>
          Save Med to Your List
        </Button> 
        </div>
      )}
    </div>
  );
}

export default SearchMed;