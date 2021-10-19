// this component adds a new medication and user clicks a button to create new med, returns it into a list BUT does it need to return into list????
// the new med, once created by the user, needs to be added to the array and table
import React, {useState} from 'react';
// import {ListGroup} from 'react-bootstrap';
// import MedTable from './MedTable';
import Form from 'react-bootstrap/Form'
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

  // TODO: cursor to next box on enter
  return (
    <div className="createMed">
      <h2>Enter New Medication Information</h2>
    <Form>
    <Form.Group controlId="medBrandName">
      <Form.Label>Enter Brand Name:</Form.Label>
      <Form.Control placeholder="Brand Name" />
    </Form.Group>
    <Form.Group controlId="medGenericName">
      <Form.Label>Enter Generic Name:</Form.Label>
      <Form.Control placeholder="Generic Name" />
    </Form.Group>
    <Form.Group controlId="medReaction">
      <Form.Label>Enter Reaction:</Form.Label>
      <Form.Control placeholder="Severe Adverse Reaction" />
    </Form.Group>
      {/* <Form.Label onChange={handleChange}>{med.brandName}>Enter Brand Name</Form.Label>
      <Form.Label onChange={handleChange}>{med.genericName}>Enter Generic Name</Form.Label>
      <Form.Label onChange={handleChange}>{med.reaction}>Enter Reaction</Form.Label> */}
    <Button onClick={handleSubmit} variant="contained" sendIcon={<SendIcon />}>Add Medication</Button>
    </Form>
    </div>
  )
}

export default CreateMed;