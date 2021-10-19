// this component takes data from SearchMeds and creates a table for the user to track by generic and brand names with the reaction
// the user can delete and edit the table
import React, {useState} from 'react';
import Table from 'react-bootstrap/Table'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import CreateMed from './CreateMed';

const UsersMedList = (props) => {

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
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Generic Name</th>
          <th>Brand Name</th>
          <th>Reaction</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{med.genericName}</td>
          <td>{med.brandName}</td>
          <td>{med.reaction}</td>
          <td>
            <Button variant="outlined" startIcon={<DeleteIcon />}>
              Delete
            </Button>
            <Button variant="contained" sendIcon={<SendIcon />}>
              Edit
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>
  )
}
  
export default UsersMedList;