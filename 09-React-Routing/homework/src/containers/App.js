import React, { useState } from 'react';

import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import { Route } from 'react-router-dom';
import About from '../components/About.jsx';
import Ciudad from '../components/Ciudad';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
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
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }
  return (
    <div className="App">
      {/* Cambios en Router DOM V6, todos los Route envueltos por <Routes /> */}
      {/* en React Router v6 las rutas van a ser por defecto exactas, cuando no queremos que sea exacta path="/*" */}
      <Route path="/">
        {/* esto Directamente se escribiria asi en Router Dom V6:
        <Route path="/" element={<Nav onSearch={onSearch} />} */}
        <Nav onSearch={onSearch} />
      </Route>
      {/* cuando pasamos componente de esta forma copiamos History, location y match */}
      <main>
        {/* en Dom v6 component se convierte en element, se puede poner lo siguiente asi:
         <Route path="/about" element={<About />} />*/}
        <Route path="/about" component={About} />
        <Route path="/" exact>
          <Cards
            cities={cities}
            onClose={onClose}
          />
        </Route>
        <Route path="/ciudad/:id"
          // render={({ match }) => {
          //   // id llega con string, hay que parsear para entero
          //   const city = cities.find(c => c.id === parseInt(match.params.id))
          //   return city ? <Ciudad city={city} /> : <h1>El array esta vacio</h1>
          // }}
          component={Ciudad}
           />
      </main>
    </div>
  );
}

export default App;
