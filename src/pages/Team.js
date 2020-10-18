import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'
import { deleteEmployee } from '../actions';
import EmployeeCard from '../components/EmployeeCard';
import NavBar from '../components/NavBar';
import Form from '../components/Form';
import { Header, Container } from './NewEmployee';

const CardsContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`;

const ModalContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    z-index: 1;
    padding: 0 20px;
    border: solid 1px #5851EA;
    border-radius: 5px;
`;

const Backdrop = styled.div`
    opacity: ${({modal}) => modal && 0.1}
`;

const SubHeading = styled.p`
text-align: center;
font-weight: 600;
color: #5851EA;
font-size: 35px;
margin 30px auto 0;
`;

function Team() {
    const [ open, setOpen ] = useState(false);
    const [ initValues, setInitValues ] = useState({});
    const { employees } = useSelector(state => state);
    const dispatch = useDispatch();

    const deleteCallback = id => dispatch(deleteEmployee(id));
    
    return (
        <Container>
            <NavBar/>
            { open && 
                <ModalContainer>
                    <SubHeading>Edit Employee</SubHeading>
                    <Form 
                        closeModal={() => setOpen(false)}
                        initValues={initValues}/>
                </ModalContainer>   
            }
            <Backdrop modal={open}>
            <Header>Team</Header>
            <CardsContainer>
                {employees.map(el => (
                    <EmployeeCard 
                        key={el.id}
                        employee={el}
                        handleOpen={() => {
                            setInitValues(el)
                            setOpen(true)}
                        }
                        handleDelete={() => deleteCallback(el.id)} />
                ))}
            </CardsContainer>
            </Backdrop>
        </Container>
    );
}

export default Team;
