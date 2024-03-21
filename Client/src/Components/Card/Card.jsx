import { Link } from "react-router-dom";

function Card({ conductor}) {
  const {Nombre, Apellido, Nacionalidad, Imagen, Descripcion, FechadeNacimiento, equipos } = conductor;
  //console.log("equipos:", conductor);

  const imagenUrl = Imagen && Imagen.url ? Imagen.url : 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Carlos_Sainz_2014_Dakar.jpg/250px-Carlos_Sainz_2014_Dakar.jpg';

  return (
    <div>
     
      <Link to={`/drivers/${conductor.id}`}>
        <h2>{Nombre}</h2>
      </Link>
      <h2>{Apellido}</h2>
      <h2>{Nacionalidad}</h2>
      <img src={imagenUrl} alt="Driver" />
      <h2>{Descripcion}</h2>
      <h2>{FechadeNacimiento}</h2>
      <h2>Escuderías:</h2>
      {equipos && equipos.length > 0 && (
        <ul>
          {equipos.map((equipo) => (
            <li key={equipo.id}>{equipo.Nombre}</li>
          ))}
        </ul>
        
      )}
    </div>
  );
}

export default Card;
