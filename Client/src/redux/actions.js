import { OBTENER_DETALLES_CONDUCTOR, BUSCAR_CONDUCTOR, FILTRAR_POR_EQUIPO } from "./action-types.js"
import axios from "axios"


  
  export const obtenerDetallesConductor = (idDriver) => {
  //  console.log(idDriver)
    return async (dispatch) => {
      try {
        
        const response = await axios.get(`http://localhost:3001/drivers/${idDriver}`);
        dispatch({
          type: OBTENER_DETALLES_CONDUCTOR,
          payload: response.data 
        });
      } catch (error) {
        console.error("Error al obtener los detalles del conductor:", error);
       
      }
    };
  };


  export const buscarConductor = (nombre) => {
    return async (dispatch) => {
      try {
        const URL = 'http://localhost:3001/drivers/name';
        const response = await axios.get(URL, {
          params: {
            nombre: nombre
          }
        });
        
        dispatch({
          type: BUSCAR_CONDUCTOR,
          payload: response.data
        });
      } catch (error) {
        console.error("Error al buscar conductor:", error);
        // Manejar el error aquí, por ejemplo, mostrando un mensaje de error al usuario
      }
    };
  };
  

  export const filtrarPorEquipo =(nombreEquipo) => {
    return {
      type: FILTRAR_POR_EQUIPO,
      payload: nombreEquipo
    
    }
  }