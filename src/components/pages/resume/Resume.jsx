import React from "react";
import Table from "react-bootstrap/Table";
import "./resume.css";

function Resume() {
  return (
    <div className="cont">
      <p className="dif">
        Аквапарки мира <br />
        vs
        <br />
        "АкваСтар" на Старобельской!
      </p>
      <Table className="tab" bordered size="sm">
        <thead>
          <tr>
            <th>
              <span className="tit">Качество</span>
            </th>
            <th>
              <span className="tit">Аквапарк</span>
            </th>
            <th>
              <span className="tit">АкваСтар</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Доступность</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>Затраты (на сеанс)</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>Раздевалка</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>Количество народа</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td className="deti">
              Количесво детей, <br></br> писающих в бассейн
            </td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>Питание</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>Отдых</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>

          {/* <tr>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr> */}
        </tbody>
      </Table>
    </div>
  );
}

export default Resume;
