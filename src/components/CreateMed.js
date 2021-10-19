// this component adds a new medication and user clicks a button to create new med, returns it into a list BUT does it need to return into list????
// the new med, once created by the user, needs to be added to the array and table
import React, {useState} from 'react';
import {ListGroup} from 'react-bootstrap';
import MedTable from './MedTable';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
// import UsersMedList from './UsersMedList';

const CreateMed = (props) => {

  const createMed = {_id: null, genericName: '', brandName: ''};
  const [med, setMed] = useState(createMed);

  const handleChange = e => {
    const {brandName, value} = e.target;
    setMed({...med, [brandName]: value});
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (med.brandName && med.genericName && med.reaction) {
      handleChange(e, props.NewMed(med));
    }
  }

  return (
    <ListGroup>
      <ListGroup.Item onChange={handleChange}>{med.brandName}</ListGroup.Item>
      <ListGroup.Item onChange={handleChange}>{med.genericName}</ListGroup.Item>
      <ListGroup.Item onChange={handleChange}>{med.reaction}</ListGroup.Item>
      <Button onClick={handleSubmit} variant="contained" sendIcon={<SendIcon />}>Add Medication</Button>
    </ListGroup>
  )
}

export default CreateMed;