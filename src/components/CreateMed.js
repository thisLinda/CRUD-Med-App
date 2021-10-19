// this component adds a new medication when not found in SearchMeds and user clicks a button to create new med, returns it into a list--does it need to return into list?
// the new med, once created by the user, needs to be added to the array and table
import React, {useState} from 'react';
import MedTable from './MedTable';
import {ListGroup} from 'react-bootstrap';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

// why aren't the props being picked up by MedTable?
const CreateMed = (props) => {
  const [meds, setMeds] = useState(medsList);

  const createMed = med => {
      med._id = meds.length + 1;
      setMeds([...meds, med])
    };

  return (
    <div className="viewMeds">
      <MedTable meds={meds} />
    </div>
    
  )
}
  // return (
  //   <ListGroup>
  //     <ListGroup.Item onChange={handleChange}>{med.brandName}</ListGroup.Item>
  //     <ListGroup.Item onChange={handleChange}>{med.genericName}</ListGroup.Item>
  //     <ListGroup.Item onChange={handleChange}>{med.reaction}</ListGroup.Item>
  //     <Button onClick={handleSubmit} variant="contained" sendIcon={<SendIcon />}>Add Medication</Button>
  //   </ListGroup>
  // )

export default CreateMed;