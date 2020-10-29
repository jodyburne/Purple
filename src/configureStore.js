import { createStore } from 'redux'
import employeeApp from './reducers';
import initalState from './mockData';

const store = createStore(employeeApp, initalState);

export default store;