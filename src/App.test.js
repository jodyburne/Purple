import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Team from './pages/Team';
import * as redux from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import reducer from './reducers';
import { ADD_EMPLOYEE, DELETE_EMPLOYEE } from './actions';
import initState from './mockData';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({ employees: [] });

describe('renders component', () => {
    const spySelector = jest.spyOn(redux, 'useSelector')
    const spyDispatch = jest.spyOn(redux, 'useDispatch')
    test('renders an employee card for each employee in state', () => {
        spyDispatch.mockReturnValue({});
        spySelector.mockReturnValue({ employees: [{ id: 123, name: 'james'}, { id: 1234, name: 'john'}] })
        const wrapper = shallow(<Team store={store}/>).dive();
        const card = wrapper.find('[data-test="employee-card"]')
        expect(card.length).toBe(2);
    });
});

describe('reducer tests', () => {
    test('returns default init state of false when no action is passed', () => {
        const newState = reducer(initState, {});
        expect(newState.employees.length).toBe(initState.employees.length)
    });
    test('returns new state with added employee with type ADD_EMPLOYEE', () => {
        const newState = reducer(initState, { type: ADD_EMPLOYEE, employee: { id: 1, name: 'joe'}});
        expect(newState.employees.length).toBe(initState.employees.length+1)

    });
    test('returns new state without removed employee with type DELETE_EMPLOYEE', () => {
        const newState = reducer(initState, { type: DELETE_EMPLOYEE, id: 123456 });
        expect(newState.employees.length).toBe(initState.employees.length-1)    
    });
});
