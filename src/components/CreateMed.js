// this component creates and adds a new medication on user clicks, returns it into MedTable
import React, {useState} from 'react';
import Form from 'react-bootstrap/Form'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const CreateMed = (props) => {
  const [brandNameValue, setBrandNameValue] = useState("");
  const [genericNameValue, setGenericNameValue] = useState("");
  const [reactionValue, setReactionValue] = useState("");
  
  const handleBrandNameChange = e => setBrandNameValue(e.target.value);
  const handleGenericNameChange = e => setGenericNameValue(e.target.value);
  const handleReactionChange = e => setReactionValue(e.target.value);
    
  const handleMedSubmit = () => {
    const createMedData = {
      brandName: brandNameValue,
      genericName: genericNameValue,
      reaction: reactionValue
    }
    props.createMed(createMedData)
  }

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