// this component takes a new medication added by the user and displays it in a table
import React from 'react';
import Table from 'react-bootstrap/Table';
import UpdateDeleteMed from './UpdateDeleteMed';

// props received from CreateMeds
const MedTable = (props) => {
 return (
   <Table className="table table-hover" striped bordered hover>
    <thead>
      <tr>
        <th>Brand Name</th>
        <th>Generic Name</th>
        <th>Reaction</th>
      </tr>
    </thead>
    <tbody>
    {/* {arrayOfData.map(dataItem => <NameOfComponent propName={dataItem} key={dataItem.uniqueProperty} /> )} */}
      {props.meds.map(med => {
          return (
            <UpdateDeleteMed med={med} key={props.medsId} updateMed={props.updateMed} deleteMed={props.deleteMed} />
          )
        })
      }
    </tbody>
  </Table>
 )
}

export default MedTable;