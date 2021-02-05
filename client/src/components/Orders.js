import React from 'react';
import Table from 'react-bootstrap/Table'

const Orders = () => {
  return(
    <div className="content-dashboard p-4">
      <h1>I tuoi ordini</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID Transazione</th>
            <th>Data prenotazione</th>
            <th>Location</th>
            <th>Posto</th>
            <th>PDF</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1123123</td>
            <td>01/03/2021 09:40-12:40</td>
            <td>Stanza 3</td>
            <td>16H</td>
            <td>SCARICA PDF</td>
          </tr>
          <tr>
            <td>1432422</td>
            <td>23/04/2021 12:40-13:40</td>
            <td>Stanza 2</td>
            <td>4A</td>
            <td>SCARICA PDF</td>
          </tr>
          <tr>
            <td>1658472</td>
            <td>12/02/2021 14:40-15:40</td>
            <td>Stanza 1</td>
            <td>1E</td>
            <td>SCARICA PDF</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
export default Orders;