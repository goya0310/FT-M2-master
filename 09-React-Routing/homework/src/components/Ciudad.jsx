import React from "react";

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

export default function Ciudad({match}) {
    // para que al refrescar pagina no se pierda datos de ciudad conviene que cargar de esta forma
    const id = match.params.id;
    // en v6 router dom:
    // const {id} = useParams();

    // almaceno un estado que comienza con undefined
    const[city, setCity] = React.useState(undefined);

    // para emular componentdivmount
    React.useEffect(() => {
        // para buscar con id
        fetch(`http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apiKey}&units=metric`)
        .then(r => r.json())
        .then((recurso) => {
          if (recurso.main !== undefined) {
            // guardo como objeto
            const ciudad = {
              min: Math.round(recurso.main.temp_min),
              max: Math.round(recurso.main.temp_max),
              img: recurso.weather[0].icon,
              id: recurso.id,
              wind: recurso.wind.speed,
              temp: recurso.main.temp,
              name: recurso.name,
              weather: recurso.weather[0].main,
              clouds: recurso.clouds.all,
              latitud: recurso.coord.lat,
              longitud: recurso.coord.lon
            };
            // si existe ciudad
            setCity(ciudad);
          } else {
            // null no es lo mismo que undefined
            setCity(null);
          }
        });
    })

    return city === undefined ? (
        <h1>Cargando...</h1>
        ) : city === null ? (
            <h1>Ciudad no encontrada</h1>
        ) : (
        <div className="ciudad">
                <div className="container">
                    <h2>{city.name}</h2>
                    <div className="info">
                        <div>Temperatura: {city.temp} ºC</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Cantidad de nubes: {city.clouds}</div>
                        <div>Latitud: {city.latitud}º</div>
                        <div>Longitud: {city.longitud}º</div>
                    </div>
            </div>
        </div>
    );
}