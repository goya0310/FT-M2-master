import { INCREMENT, DECREMENT } from '../actions';

const initialState = {
  count: 0
}

// para manejar un reducer sin switch, mucho mejor en rendimiento
// const cases = {
//   [INCREMENT]: (state) => {return {count: state.count + 1}},
//   [DECREMENT]: (state) =>  {return {count: state.count - 1}}
// }

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator. 
// ¿Qué tiene que hacer el reducer con el contador de cada caso?
export default (state = initialState, action) => {
  // cdo se hace de otra forma que no es switch
  // return cases.hasOwnProperty(action.type) ? cases[action.type](state) : state;
  switch (action.type) {
    case INCREMENT: return {
      count: state.count + 1, 
    }
    // completa para este caso
    case DECREMENT: return {
      count: state.count -1
    }
    // Fill para este otro
    default:
      return state;
  }
};