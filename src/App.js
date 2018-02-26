import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increment, decrement } from './reducers/counter';

const App = ({ counter, increment, decrement }) => (
  <div>
    <h1>Counter: {counter}</h1>
    <button onClick={increment}>
      Incrementar
    </button>
    <button onClick={decrement}>
      Decrementar
    </button>
  </div>
)

const mapStateToProps = (state) => {
  return {
    counter: state
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  increment,
  decrement
}, dispatch)
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => {
//       dispatch(increment())
//     },
//     decrement: () => {
//       dispatch(decrement())
//     }
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(App);
