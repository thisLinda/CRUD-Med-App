// this component is to update and delete a med from the table, functionality to achieve is turning the individual table fields into a form for inputs
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

// export default function UpdateDeleteMed({ med, updateMed }) {
const UpdateDeleteMed = ({med, updateMed}) => {
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
    console.log('inside the handleChange')
    // code 
  }

  const handleEditClick = (e) => {
    e.preventDefault();
    setIsEdit(!isEdit);
    // this log appears when edit is clicked
    console.log('inside handleEditClick')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMed(formData);
    setIsEdit(false);
    // log message appeared when I clicked submit
    console.log('inside handleSubmit')
  }

  const {genericName, brandName, reaction} = med;

  // https://reactjs.org/docs/hooks-effect.html
  useEffect(() => {
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
        <Button variant="outlined" startIcon={<DeleteIcon />}>
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
      <Button variant="outlined" startIcon={<DeleteIcon />}>
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