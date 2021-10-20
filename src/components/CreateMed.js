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

  const createMed = {_id: null, brandName: "", genericName: "", reaction: ""};
  const [createMedValue, setCreateMedValue] = useState(createMed);
  // const [medValue, setMedValue] = useState(createMed);
  // const [medValue, setMedValue] = useState("");

  const [brandNameValue, setBrandNameValue] = useState("");
  const [genericNameValue, setGenericNameValue] = useState("");
  const [reactionValue, setReactionValue] = useState("");
  
  const handleMedChange = e => setCreateMedValue(e.target.value);
  // const handleGenericNameChange = e => setGenericNameValue(e.target.value);
  // const handleReactionChange = e => setReactionValue(e.target.value);
    
  const handleBrandNameSubmit = () => {
    const brandNameData = {
      name: brandNameValue
    }
    setBrandNameValue("");
    props.createBrandNameMed(brandNameData)
  }

  const handleGenericNameSubmit = () => {
    const genericNameData = {
      name: genericNameValue
    }
    setGenericNameValue("");
    props.createGenericNameMed(genericNameData);
  }

  const handleReactionSubmit = () => {
    const reactionData = {
      name: reactionValue
    }
    setReactionValue("");
    props.createReactionMed(reactionData);
  }

  // TODO: cursor to next box on enter
  return (
    <div className="createMed">
      <h2>Enter New Medication Information</h2>
    <Form>
    <Form.Group controlId="medBrandName">
      <Form.Label value={brandNameValue}>Enter Brand Name:</Form.Label>
      <Form.Control onChange={handleBrandNameSubmit} placeholder="Brand Name" />
    </Form.Group>
    <Form.Group controlId="medGenericName">
      <Form.Label value={genericNameValue}>Enter Generic Name:</Form.Label>
      <Form.Control onChange={handleGenericNameSubmit} placeholder="Generic Name" />
    </Form.Group>
    <Form.Group controlId="medReaction">
      <Form.Label value={reactionValue}>Enter Reaction:</Form.Label>
      <Form.Control onChange={handleReactionSubmit} placeholder="Severe Adverse Reaction" />
    </Form.Group>
      {/* <Form.Label onChange={handleChange}>{med.brandName}>Enter Brand Name</Form.Label>
      <Form.Label onChange={handleChange}>{med.genericName}>Enter Generic Name</Form.Label>
      <Form.Label onChange={handleChange}>{med.reaction}>Enter Reaction</Form.Label> */}
    <Button onClick={handleMedChange} variant="contained" sendIcon={<SendIcon />}>Add Medication</Button>
    </Form>
    </div>
  )
}

export default CreateMed;