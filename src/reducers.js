import { combineReducers } from 'redux'
import { ADD_EMPLOYEE, EDIT_EMPLOYEE, DELETE_EMPLOYEE } from './actions';
import initalState from './mockData';

function employees(state=initalState, action) {
    switch (action.type) {
        case ADD_EMPLOYEE: 
        return [
            ...state,
            action.employee
        ];
        case EDIT_EMPLOYEE:
            const editCopy = [...state];
            const index = editCopy.findIndex(e => e.id === action.employee.id);
            editCopy[index] = action.employee;
            return editCopy;
        case DELETE_EMPLOYEE:
            const deleteCopy = [...state];
            return deleteCopy.filter(e => e.id !== action.id);
        default:
            return state;
    }
}

const employeeApp = combineReducers({
    employees,
});

export default employeeApp;
