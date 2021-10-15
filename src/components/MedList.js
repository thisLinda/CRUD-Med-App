// this component is the user's list of medications; user can add, delete, update
// import React, {useState} from 'react';
import React, {Table, useState} from 'react-bootstrap';
// import MedForm from './MedForm';
// import Med from './Med';

function MedList() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Generic Name</th>
          <th>Adverse Reaction</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>haldol</td>
          <td>tardive dyskinesia</td>
        </tr>
        <tr>
          <td>tetracycline</td>
          <td>esophageal ulceration</td>
        </tr>
        <tr>
          <td>fosamax</td>
          <td>esophageal stricture</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default MedList;