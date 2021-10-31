// this component is to update and delete a med from the table, functionality to achieve is turning the individual table fields into a form for inputs
import React, { useEffect, useState } from 'react';
// import React, {useState} from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

const UpdateDeleteMed = ({med, medsId, updateMed, deleteMed}) => {
  const [isEdit, setIsEdit] = useState(false);

  const [formData, setFormData] = useState({
    brandName: "",
    genericName: "",
    reaction: "",
    submitted: false,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const handleEditClick = (e) => {
    e.preventDefault();
    setIsEdit(!isEdit);
  }

  const handleDeleteClick = (e) => {
    e.preventDefault();
    console.log("this is genericName in handleDeleteClick " + genericName) // gold! this logged the generic name of the med I clicked delete on!
    // deleteMed([0]);
    deleteMed(med._id);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMed(formData);
    setIsEdit(!isEdit)
  }

  const {brandName, genericName, reaction} = med;
// you're using useEffect to fill the form if they're editing. I don't think you need to do that. You should be able to just set the initalState of the form data to be the data in med.
  // https://reactjs.org/docs/hooks-effect.html
  useEffect(() => {
  // initialState(() => {
    if (isEdit) {
      setFormData(med);
    }
  }, [isEdit]);

  if (isEdit) {
    return (
      <tr>
        <td>
          <input type="text" name="brandName" value={formData.brandName} onChange={handleChange} />
        </td>
        <td>
          <input type="text" name="genericName" value={formData.genericName} onChange={handleChange} />
        </td>
        <td>
          <input type="text" name="reaction" value={formData.reaction} onChange={handleChange} />
        </td>
        <td>
        <Button variant="outlined" startIcon={<DeleteIcon />} onClick={handleDeleteClick}>
          Delete
        </Button>
        <Button variant="contained" sendIcon={<SendIcon />} onClick={handleEditClick}>
          Edit
          {/* ternary for debugging if handleChange code is working */}
          {/* Edit: { isEdit ? "true" : "false" } */}
        </Button>
        <Button variant="contained" sendIcon={<SendIcon />} onClick={handleSubmit}>
          Submit
        </Button>
        </td>
      </tr>
    )
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

export default UpdateDeleteMed;