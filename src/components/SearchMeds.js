// adapted from https://github.com/machadop1407/React-Search-Bar

import React, {useState} from 'react';
import './SearchMeds.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';

function SearchMed({placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const[searchTerm, setSearchTerm] = useState('');

  const handleFilter = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    const newFilter = data.filter((value) => {
      return value.genericName.toLowerCase().includes(searchTerm.toLowerCase());
    });
    if (searchTerm === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  const clearInput = () => {
    setFilteredData([]);
    setSearchTerm("");
  };
  return (
    <div className="search">
      <div className="searchIinputs">
        <input 
          type="text" 
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchOutlinedIcon />
          ) : (
            <CancelPresentationOutlinedIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 5).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="_blank">
                <p>{value.genericName} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchMed;