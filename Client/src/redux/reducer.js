import { BUSCAR_CONDUCTOR,OBTENER_DETALLES_CONDUCTOR, FILTRAR_POR_EQUIPO } from "./action-types.js";

const initialState = {
  conductores: [],
  detalleConductor: null,
  filtradoEquipos: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUSCAR_CONDUCTOR:
      return {
        ...state,
        conductores: action.payload
      };
    case OBTENER_DETALLES_CONDUCTOR:

      return {
        ...state,
        detalleConductor: action.payload 
      };
    case FILTRAR_POR_EQUIPO:

    const [conductores]= state;
      return {
        ...state,
        filtradoEquipos: state.conductores.filter(conductor => conductor.equipos.includes(action.payload))
      };
    default:
      return state;
  }
};

export default rootReducer;
