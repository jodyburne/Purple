import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import employeeApp from './reducers';
import initalState from './mockData';
// import { addEmployee, editEmployee, deleteEmployee } from './actions';

const store = createStore(employeeApp, initalState);

// to test redux is working
// console.log(store.getState())
// const unsubscribe = store.subscribe(() => console.log(store.getState()))
// store.dispatch(addEmployee({name: 'leandro', employeeId: 12}))
// store.dispatch(addEmployee({name: 'leandro', employeeId: 44}))
// store.dispatch(editEmployee({name: 'jody', employeeId: 44}))
// store.dispatch(deleteEmployee(44))
// unsubscribe()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

