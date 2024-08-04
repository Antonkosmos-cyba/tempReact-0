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
            <td className="tit">Доступность</td>
            <td>
              Всякой твари по паре
              <br />
              (Кто только туда не ходит!)
            </td>
            <td>
              Только свои! <br />
              (приличние люди)
            </td>
          </tr>

          <tr>
            <td className="tit">Затраты (на сеанс)</td>
            <td>
              Море денег!
              <br /> (плати за каждый шаг)
            </td>
            <td>
              На проезд и <br />
              перекусить
            </td>
          </tr>

          <tr>
            <td className="tit">Раздевалка</td>
            <td>
              Чужие мужчины и женщины и <br />
              капризные дети
            </td>
            <td>Только свои люди!</td>
          </tr>

          <tr>
            <td className="tit">Количество народа</td>
            <td>Вся россия!!!</td>
            <td>
              Свои друзья
              <br /> (самые лучшие!)
            </td>
          </tr>

          <tr>
            <td className="deti tit">
              Количество детей, <br></br> писающих в бассейн
            </td>
            <td>Все и постоянно</td>
            <td>
              Только мелкие и <br />
              только когда
              <br /> заиграются
            </td>
          </tr>

          <tr>
            <td className="tit">Питание</td>
            <td>Всякая дрань с ЕЕ добавками!</td>
            <td>
              Вкусняшки домашние
              <br /> для настроения
            </td>
          </tr>

          <tr>
            <td className="tit">Отдых</td>
            <td>Шум, гам, суета</td>
            <td>Тишина и расслабление</td>
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
