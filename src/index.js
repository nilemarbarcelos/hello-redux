import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counter from './reducers/counter';

const initialState = 10;
const store = createStore(counter, initialState);

// store.subscribe(() => {
//   console.log('state:', store.getState());
// });

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
