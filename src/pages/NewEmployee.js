import React from 'react';
import styled from 'styled-components';
import Form from '../components/Form';
import NavBar from '../components/NavBar';
import { SquareOne, SquareTwo } from './Team';

export const Container = styled.div`
    padding-bottom: 50px;
    position: relative;
`;

export const Header = styled.p`
    text-align: center;
    font-weight: 600;
    color: #5851EA;
    font-size: 35px;
    margin 150px auto;
`;

function NewEmployee() {
    return (
        <Container>
            <NavBar />
            <SquareOne src="/images/el-1.png" />
            <SquareTwo src="/images/el-1.png" />
            <Header>New Employee</Header>
            <Form />
        </Container>
    );
}

export default NewEmployee;
