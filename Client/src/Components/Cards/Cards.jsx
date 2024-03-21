import Card from "../Card/Card";

function Cards({ drivers}) {
   // console.log("CardS", drivers);

    return (
        <div>
            
            {drivers.map((driver) => (
        
                <div key={driver.id}>
                    {driver.conductores.map((conductor) => (
                        <Card key={conductor.id} 
                        conductor={{
                            id: conductor.id,
                            Nombre: conductor.Nombre,
                            Imagen: conductor.Imagen,
                            equipos: conductor.equipos
                            }} />
                    ))}
                </div>
            ))}
            
        </div>
    );
}

export default Cards;
