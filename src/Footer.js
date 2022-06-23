import React from 'react';
import { Table } from 'reactstrap';

const Footer = (props) => {
  return (
    <Table color="secondary">
      <thead>
        <tr>
          <th>1</th>
          <th>Footer</th>
          <th>Lorem</th>
          <th>Ypsum</th>
          <th>Lorem</th>
          <th>Ypsum</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">2</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>

      </tbody>
    </Table>
  );
}

export default Footer;