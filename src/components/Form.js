import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addEmployee, editEmployee } from '../actions';
import PillButton from './PillButton';
import { useHistory } from "react-router-dom";


const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Open Sans', sans-serif; 
    margin: 25px 0;
`;

const InputContainer = styled.div`
    @media (max-width: 1200px) {
        width: 600px;
    };
    @media (min-width: 1200px) {
        width: ${props => props.small ? '545px' : '1140px'};
    };
    height: 60px;
    border: 2px solid #f8f8f8;
    border-radius: 5px;
    display: flex;
    margin: 10px 10px 0;
    padding: 10px 50px;
    align-items: center;
    box-sizing: border-box;
    background-color: white;
`;

const SmallInputGroupContainer = styled.div`
    @media (max-width: 1200px) {
        width: 620px;
    };
    @media (min-width: 1200px) {
        width: 1160px;
    };
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
    margin-bottom: 75px;
`;

const Input = styled.input`
    border: none;
    flex: 1;
    padding: 10px;
    :focus {
        outline: none;
    };
    :disabled {
        color: #e8e8e8;
    }
    background-color: #fff;
    font-size: 18px;
`;

const Label = styled.label`
    color: rgba(88,81,234, 0.7);
    width: 150px;
    font-size: 18px;
`;

const Form = styled.form`
    display flex;
    flex-direction: column;
    align-items: center;
`;

const Error = styled.p`
    color: #5851EA;
`;

function NewEmployeeForm({ initValues, closeModal }) {
    const [ formValues, setFormValues ] = useState({
        id: Math.floor(Math.random() * 1000000),
        dob: '',
        address: '',
        status: '',
        position: '',
        created: '',
        updated: '',
    });

    useEffect(() => {
        if (initValues) {
            const { id, dob, address, status, position, created, updated, name } = initValues;
            setFormValues({
                id: id ? id : '',
                dob: dob ? dob : '',
                address: address ? address : '',
                status: status ? status : '',
                position: position ? position : '',
                created: created ? created : '',
                updated: updated ? updated : '',
            });
            setName(name);
        }
    }, [initValues]);
 
    const [ name, setName ] = useState('');
    const [ error, setError ] = useState(false);

    let history = useHistory();
    const dispatch = useDispatch();

    const handleChange = e => {
        const { target } = e;
        const { name, value } = target;  
        setFormValues(formValues => ({ ...formValues, [name]: value }));
    }

    const handleNameChange = e => {
        const { target } = e;
        const { value } = target;  
        setName(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name === '') {
            setError(true);
            return;
        }
        setError(false);
        if (initValues) {
            dispatch(editEmployee({...formValues, name}));
            closeModal();
            return;
        }
        dispatch(addEmployee({...formValues, name}));
        history.push('/team');
    }

    return (
        <Main>
            <Form>
                <InputContainer>
                    <Label>Employee ID: </Label>
                    <Input 
                        disabled
                        name="id"
                        value={formValues.id}
                        onChange={e => handleChange(e)}
                        type="text" />
                </InputContainer>
                <InputContainer>
                    <Label>Name: </Label>
                    <Input 
                        name="name"
                        value={name}
                        onChange={e => handleNameChange(e)}
                        type="text" />
                </InputContainer>
                <InputContainer>
                    <Label>Birthdate: </Label>
                    <Input 
                        name="dob"
                        value={formValues.dob}
                        onChange={e => handleChange(e)}
                        type="text" />
                </InputContainer>
                <InputContainer>
                    <Label>Address: </Label>
                    <Input
                        name="address"
                        value={formValues.address} 
                        onChange={e => handleChange(e)}
                        type="text" />
                </InputContainer>
                <InputContainer>
                    <Label>Status: </Label>
                    <Input 
                        name="status"
                        value={formValues.status}
                        onChange={e => handleChange(e)}
                        type="text" />
                </InputContainer>
                <InputContainer>
                    <Label>Position: </Label>
                    <Input 
                        name="position"
                        value={formValues.position}
                        onChange={e => handleChange(e)}
                        type="text" />
                </InputContainer>
                <SmallInputGroupContainer>
                    <InputContainer small>
                        <Label>Created: </Label>
                        <Input 
                            name="created"
                            value={formValues.created}
                            onChange={e => handleChange(e)}
                            type="text" />
                    </InputContainer>
                    <InputContainer small >
                        <Label>Updated: </Label>
                        <Input 
                            name="updated"
                            value={formValues.updated}
                            onChange={e => handleChange(e)}
                            type="text" />
                    </InputContainer>
                </SmallInputGroupContainer>
            {error && <Error>Please provide a name</Error>}
            <PillButton 
                callback={(e) => handleSubmit(e)} 
                text="Submit" />
            </Form>
        </Main>
    );
}

export default NewEmployeeForm;
