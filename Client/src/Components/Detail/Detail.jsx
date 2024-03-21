// USANDO REDUX
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { obtenerDetallesConductor } from "../../redux/actions";

const Detail = ({ conductor, obtenerDetallesConductor }) => {
    const { idDriver } = useParams();
    console.log(idDriver)
    console.log(conductor)

  useEffect(() => {
    obtenerDetallesConductor(idDriver);
  }, [idDriver, obtenerDetallesConductor]);

  if (!conductor) {
    return <div>Cargando...</div>;
  }
  const { driver, teams } = conductor;

  const { id, Nombre, Apellido, Nacionalidad, Imagen, Descripcion, FechadeNacimiento, equipos } = driver;
  const imagenUrl = Imagen && Imagen.url ? Imagen.url : 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Carlos_Sainz_2014_Dakar.jpg/250px-Carlos_Sainz_2014_Dakar.jpg';

  return (
    <div>
      <h2>ID: {id}</h2>
      <h2>Nombre: {Nombre}</h2>
      <h2>Apellido: {Apellido}</h2>
      <h2>Nacionalidad: {Nacionalidad}</h2>
      <img src={imagenUrl} alt="Driver" />
      <h2>Descripción: {Descripcion}</h2>
      <h2>Fecha de Nacimiento: {FechadeNacimiento}</h2>
      <h2>Escuderias:</h2>
      {teams && teams.length > 0 && (
        <ul>
          {teams.map((equipo) => (
            <li key={equipo.id}>{equipo.Nombre}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  conductor: state.detalleConductor,
});


export default connect(mapStateToProps, { obtenerDetallesConductor })(Detail);




//USANDO REACT

// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import Card from "../Card/Card";
// import axios from "axios";

// function Detail() {

    // const { idDriver } = useParams();
    // const [driverDetail, setDriverDetail] = useState(null);
    // const [teams, setTeams] = useState([]);

    // useEffect(() => {
    //     const fetchDriverDetail = async () => {
    //         if (idDriver) {
    //             try {
    //                 const response = await axios.get(`http://localhost:3001/drivers/${idDriver}`);
    //                 const data = response.data;
    //                 if (data.driver) {
    //                     setDriverDetail(data.driver);
    //                     setTeams(data.teams); // Establecer los equipos obtenidos de la respuesta
    //                 } else {
    //                     window.alert("No hay conductor con este ID");
    //                 }
    //             } catch (error) {
    //                 console.error("Error al obtener los detalles del conductor:", error);
    //             }
    //         }
    //     };
    
    //     fetchDriverDetail(); 
    // }, [idDriver]);
    
    // if (!driverDetail) {
    //     return <div>Cargando...</div>;
    // }

    // // Combinar la información del conductor y los equipos
    // const driverWithTeams = { ...driverDetail, equipos: teams };

      {/* <Card conductor={driverWithTeams} />  */}