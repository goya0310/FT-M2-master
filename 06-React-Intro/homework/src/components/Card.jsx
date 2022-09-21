import React from 'react';
import Temp from './Temp.jsx';


// se puede hacer destructuring, en App.js se le pasan los siguientes datos como objeto
export default function Card({max, min , name, img, onClose}) { 
  // acá va tu código
  // en esta funcion se le da un poco de estilo
  return (
   <div>
    <span>{name}</span>
    <button onClick={onClose}>X</button>
    <div>
      {/* se crea funcion Temp que puede ser reutilizable */}
      <Temp label="Min" value={min} />
      <Temp label="Max" value={max} />
      {/* se hace con template string p/agregar nombre de imagen */}
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="icono" />
    </div>
  </div>
  );
};