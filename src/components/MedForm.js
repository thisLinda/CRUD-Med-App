// this component creates and adds a new medication on user clicks, returns it into MedTable
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const CreateMed = (props) => {
  const [brandNameValue, setBrandNameValue] = useState("");
  const [genericNameValue, setGenericNameValue] = useState("");
  const [reactionValue, setReactionValue] = useState("");
  
  const handleBrandNameChange = e => setBrandNameValue(e.target.value);
  const handleGenericNameChange = e => setGenericNameValue(e.target.value);
  const handleReactionChange = e => setReactionValue(e.target.value);

  const handleMedSubmit = (e) => {
    e.preventDefault();
    const createMedData = {
      brandName: brandNameValue,
      genericName: genericNameValue,
      reaction: reactionValue
    }
    props.createMed(createMedData);
    setBrandNameValue("")
    setGenericNameValue("")
    setReactionValue("")
  }

  // code was not clearing from input after submit because values were in Form.Label instead of Form.Control
  // after hooking up router link from /add to /list did not work, discussion here re: using history which resulted iin an error `no-restricted-globals`, https://github.com/couds/react-bulma-components/issues/55; hack approachs tried https://stackoverflow.com/questions/42463263/wrapping-a-react-router-link-in-an-html-button#answer-46088718, https://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router, https://stackoverflow.com/questions/26069238/call-multiple-functions-onclick-reactjs
  return (
    <div className="createMed">
      <h2>Enter New Medication Information</h2>
    <Form>
    <Form.Group controlId="medBrandName">
      <Form.Label>Enter Brand Name:</Form.Label>
      <Form.Control value={brandNameValue} onChange={handleBrandNameChange} placeholder="Brand Name" />
    </Form.Group>
    <br />
    <Form.Group controlId="medGenericName">
      <Form.Label>Enter Generic Name:</Form.Label>
      <Form.Control value={genericNameValue} onChange={handleGenericNameChange} placeholder="Generic Name" />
    </Form.Group>
    <br />
    <Form.Group controlId="medReaction">
      <Form.Label>Enter Reaction:</Form.Label>
      <Form.Control value={reactionValue} onChange={handleReactionChange} placeholder="Severe Adverse Reaction" />
    </Form.Group>
    <br />
    <Link to={`/list`}>
    <Button onClick={handleMedSubmit} variant="contained" sendIcon={<SendIcon />}>Add Medication</Button>
    </Link>
    </Form>
    </div>
  )
}

export default CreateMed;