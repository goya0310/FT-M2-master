import React from 'react';

// class Counter extends React.Component {
//     // para inicializar ese estado
//     constructor(props){
//         super(props);
//         this.state = {
//             count: 0,
//         };
//         // si hago mas abajo con funciones clasicas (no arrow), bindeo el this
//         // this.handleDecrement = this.handleDecrement.bind(this);
//     }
    

//     // cuando el componente se actualiza
//     componentDidUpdate(){
//         console.log(this.state)
//     }

//     //creo metodo con setState    
//     handleIncrement = () => {
//         this.setState({count: this.state.count + 1});
//         // si yo duplico no sube de a 2, xq' count en ambos es igual a 0 hasta que no termina de ejecutar todo
//         this.setState({count: this.state.count + 1});
//     };

//     handleDecrement = () => {
//         this.setState((state) => ({count: state.count - 1}));
//         // haciendo una fucion y pasando como parametro state si se puede lograr que baje de a 2
//         this.setState((state) => ({count: state.count - 1}))
//         // esto sirve para hacer cambios que dependan del cambio anterior
//     }

//     render() {
//         return(
//             <div style={{
//                 width: '250px',
//                 height: '250px',
//                 textAlign: 'center',
//                 position: 'center',
//                 margin: '0 auto',
    
//             }}>
//             <h1>Counter</h1>
//             <h2>{this.state.count}</h2>
//             <p>
//                 <button onClick={this.handleIncrement}>+</button>
//                 <button onClick={this.handleDecrement}>-</button>
//             </p>
//             {/* renderizado condicional de Info */}
//             {this.state.count === 2 && <Info />}
//             </div>
//         );
//     }
// }

class Info extends React.Component{
   // cuando el componente se renderiza, son eventos
    componentDidMount(){
        console.log('el componente Info se monto')
    }
    componentWillUnmount(){
        console.log('el componente Info se desmonto')
    }
    render(){
        return <div>INFO</div>
    }
}
// para emular componentdivmount en un componente funcional
function InfoFunc () {
    React.useEffect(() => {
        console.log('El componente InfoFunc se monto');
        // se le pasa un array vacio p/q' no busque cambios

        // para cdo el componente se desmonta se hace return, closure
        return () => {
            console.log('El componente InfoFunc se desmonto')
        }
    }, []);
    return <div>INFO</div>
}

// vamos a crear el componente funcional
export default function CounterFunc (){
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        console.log('El componente CounterFunc se monto');

        return () => {
            console.log('El componente CounterFunc se desmonto')
        }
        // si le paso count va a ejecutarse tb cdo se actualice el estado count
    },[count])
    

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count -1)
    }

    return(
        <div style={{
            width: '250px',
            height: '250px',
            textAlign: 'center',
            position: 'center',
            margin: '0 auto',

        }}>
        <h1>Counter</h1>
        <h2>{count}</h2>
        <p>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </p>
        {/* renderizado condicional de Info */}
        {count === 2 && <InfoFunc />}
        </div>
    );
}