import React from 'react';
import Table from 'react-bootstrap/Table'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

// props received from CreateMeds
const MedTable = (props) => {
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
      {props.meds.map(med => {
        const {genericName, brandName, reaction} = med;
          return (
            <tr>
              <td>{props.genericName}</td>
              <td>{props.brandName}</td>
              <td>{props.reaction}</td>
              <td>
                <Button variant="contained" endIcon={<SendIcon />}>
                  Add
                </Button>
                <Button variant="outlined" startIcon={<DeleteIcon />}>
                  Delete
                </Button>
                <Button variant="contained" sendIcon={<SendIcon />}>
                  Edit
                </Button>
              </td>
            </tr>
          )
        })
      }
    </tbody>
  </Table>
 )
}

export default MedTable;