import React from "react";
import Table from "react-bootstrap/Table";
import "./resume.css";

function Resume() {
  return (
    <div className="cont">
      <Table className="tab" bordered size="sm">
        <thead>
          <tr>
            <th>Lorem ipsum dolor sit amet consectetur</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Resume;
