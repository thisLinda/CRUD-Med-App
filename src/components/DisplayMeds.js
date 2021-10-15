// this component is to display DisplayMeds
// TODO: medication is either generic or brand
import React, {Table} from 'react-bootstrap';
import MedList from './MedList';

function DisplayMeds() {
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

export default DisplayMeds;