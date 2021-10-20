// this component adds a new medication and user clicks a button to create new med, returns it into a list BUT does it need to return into list????
// the new med, once created by the user, needs to be added to the array and table
import React, {useState} from 'react';
import Form from 'react-bootstrap/Form'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const CreateMed = (props) => {

  const createMed = {_id: null, brandName: "", genericName: "", reaction: ""};
  const [createMedValue, setCreateMedValue] = useState("");
  
  const [brandNameValue, setBrandNameValue] = useState("");
  const [genericNameValue, setGenericNameValue] = useState("");
  const [reactionValue, setReactionValue] = useState("");
  
  const handleBrandNameChange = e => setBrandNameValue(e.target.value);
  const handleGenericNameChange = e => setGenericNameValue(e.target.value);
  const handleReactionChange = e => setReactionValue(e.target.value);
    
  const handleMedSubmit = () => {
    const createMedData = {
      name: createMedValue
    }
    setCreateMedValue("");
    props.createMed(createMedData)
  }

  // TODO: cursor to next box on enter
  return (
    <div className="createMed">
      <h2>Enter New Medication Information</h2>
    <Form>
    <Form.Group controlId="medBrandName">
      <Form.Label value={brandNameValue}>Enter Brand Name:</Form.Label>
      <Form.Control onChange={handleBrandNameChange} placeholder="Brand Name" />
    </Form.Group>
    <Form.Group controlId="medGenericName">
      <Form.Label value={genericNameValue}>Enter Generic Name:</Form.Label>
      <Form.Control onChange={handleGenericNameChange} placeholder="Generic Name" />
    </Form.Group>
    <Form.Group controlId="medReaction">
      <Form.Label value={reactionValue}>Enter Reaction:</Form.Label>
      <Form.Control onChange={handleReactionChange} placeholder="Severe Adverse Reaction" />
    </Form.Group>
    <Button onClick={handleMedSubmit} variant="contained" sendIcon={<SendIcon />}>Add Medication</Button>
    </Form>
    </div>
  )
}

export default CreateMed;