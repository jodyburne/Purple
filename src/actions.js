export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const EDIT_EMPLOYEE = 'EDIT_EMPLOYEE';
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';

export function addEmployee(employee) {
    return {
        type: ADD_EMPLOYEE,
        employee
    };
}

export function editEmployee(employee) {
    return {
        type: EDIT_EMPLOYEE,
        employee
    };
}

export function deleteEmployee(id) {
    console.log(id)
    return {
        type: DELETE_EMPLOYEE,
        id
    };
}
