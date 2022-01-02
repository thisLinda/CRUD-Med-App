// this component is to update and delete a med from the table, functionality to achieve is turning the individual table fields into a form for inputs
import React, {useState} from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import MedEditForm from './MedEditForm';
// import { useHistory, useRouteMatch } from 'react-router';

const MedView = ({med, updateMed, deleteMed}) => {

  const [isEdit, setIsEdit] = useState(false);
  // const match = useRouteMatch();
  // const history = useHistory();

  // const[meds, setMeds] = useState([])

  const handleEditClick = (e) => {
    setIsEdit(!isEdit);
  }

  const handleDeleteClick = (e) => {
    deleteMed(med._id);
  }

  const handleSubmit = (updateMedData) => {
    updateMed(updateMedData);
    setIsEdit(!isEdit)
  }

  const {brandName, genericName, reaction} = med;

  if (isEdit) {
    return <MedEditForm med={med} deleteMed={deleteMed} onSubmit={handleSubmit} /> 
  }

  return (
    <tr>
      <td>{brandName}</td>
      <td>{genericName}</td>
      <td>{reaction}</td>
      <td>
      <Button variant="outlined" startIcon={<DeleteIcon />} onClick={handleDeleteClick}>
        Delete
      </Button>
      <Button variant="contained" sendIcon={<SendIcon />} onClick={handleEditClick}>
        Edit
      </Button>
      </td>
    </tr>
  )
}

export default MedView;