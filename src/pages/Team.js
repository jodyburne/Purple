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

export const SquareOne = styled.img`
    position: absolute;
    top: 250px;
    left: 250px;
`;

export const SquareTwo = styled.img`
    position: absolute;
    top: 350px;
    right: 150px;
    transform: rotate(225deg);
`;

const SquareThree = styled.div`
    width: 55px;
    height: 55px;
    background-color: #ffa7b6;
    margin: 50px 0 75px 250px;
    transform: rotate(75deg);

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
                <SquareOne alt="square" src="/images/el-1.png" />
                <SquareTwo alt="square" src="/images/el-1.png" />
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
                <div>
                    <SquareThree />
                </div>
            </Backdrop>
        </Container>
    );
}

export default Team;
