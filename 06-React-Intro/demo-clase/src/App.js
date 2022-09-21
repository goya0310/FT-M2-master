import React from "react";

// function App() {
//   return (
//     <div className="App">
//       Hola
//     </div>
//   );
// }

function alertFn(){
  alert('Hola')
}

// Se puede hacer componente tipo clase
// class App extends React.Component {
//   render(){
//     return <Saludo name='Franco' />;
//   }
//   }

// O componente tipo funcion como el siguiente:

  function App(){
    return <Saludo name='Franco' onAlert={alertFn}/>; //onAlert={alertFn()} pasar una funcion de esta manera va a hacer que se ejecute la alerta antes que pase el nombre, se debe sin los ()
    //si hago un arrow function onAlert={()=> alertFn()} no la ejecuta, declara una funcion que invoca a alertFn
  }


class Saludo extends React.Component {
  constructor(props){ // no hace falta crear el constructor
    super(props);
  }
  render(){
    return (
      <h1>
        Hola {this.props.name} 👋
      </h1>
    );
  }
}

export default App;
