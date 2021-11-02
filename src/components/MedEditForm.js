import React, {useState} from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

export default function MedEditForm({med, deleteMed, onSubmit }) {
  
  const [formData, setFormData] = useState(med);

  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
  }

  const handleDeleteClick = (e) => {
    deleteMed(med._id);
  }

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
      <Button variant="contained" sendIcon={<SendIcon />} onClick={ () => onSubmit(formData)}>
        Submit
      </Button>
      </td>
    </tr>
  )
}