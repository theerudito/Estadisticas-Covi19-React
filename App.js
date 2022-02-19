import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const AxiosApiCovid = () => {
  const [covid, setcovid] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const respuesta = await axios.get("https://api.covid19api.com/summary");
        console.log(respuesta);
        const data = await respuesta.data.Countries;
        console.log(data);
        setcovid(data);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerDatos();
  }, []);

  return (
    <Fragment>
      <h4 className="text-center text-primary m-4">
        Covid19 - 2022 Estadisticas
      </h4>
      <table className="table table-dark table-hover container">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Pais</th>
            <th scope="col"># Contagiados</th>
            <th scope="col"># Muertos</th>
          </tr>
        </thead>
        <tbody>
          {covid.map((item) => (
            <tr key={item.id}>
              <td>{item.CountryCode}</td>
              <td>{item.Country}</td>
              <td>{item.TotalConfirmed}</td>
              <td>{item.TotalDeaths}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default AxiosApiCovid;
