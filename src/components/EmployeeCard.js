import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faPen } from '@fortawesome/free-solid-svg-icons'

const CardContainer = styled.div`
    width: 700px;
    height: 350px;
    margin: 40px;
    box-shadow: 2px 3px 3px 3px #fafafa;
    background-color: white;
`;

const UpperContainer = styled.div`
    height: 140px;
    border-bottom: 2px solid rgba(88,81,234, 0.5);
    display: flex;
    justify-content: space-between;
`;

const LowerContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 210px;
    justify-content: space-around;
    padding: 15px 50px;
    box-sizing: border-box;
`;

const UserHeaderContainer = styled.div`
    display: flex;
    align-items: center; 
    width: 50%;
`;

const IconContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 10px 40px;
    box-sizing: border-box;
`;

const LabelContainer = styled.div`
    width: 100px;
`;

const DetailsContainer = styled.div`
    display: flex;
`;

const Picture = styled.img`
    height: 85px;
    width: 85px;
    border-radius: 50px;
    object-fit: cover;
    object-position: 10% 10%;
    margin: 10px 40px;
`; 

const Name = styled.p`
    font-size: 18px;
    opacity: 0.7;
    margin: 6px auto;
`;

const Label = styled.span`
    font-size: 16px;
    opacity: 0.3;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    width: 200px;
`;

const DetailsText = styled.span`
    opacity: 0.7;
`; 

const CrossIcon = styled(FontAwesomeIcon)`
    font-size: 25px;
    padding: 20px 0;
    opacity: 0.3;
    cursor: pointer;
`;

const PenIcon = styled(FontAwesomeIcon)`
    font-size: 20px;
    padding: 20px 30px;
    opacity: 0.3;
    cursor: pointer;
`;


function EmployeeCard({ employee, handleDelete, handleOpen }) {
    const { name, id, dob, address, status, position, created, updated } = employee;

    return (
        <CardContainer>
            <UpperContainer>
                <UserHeaderContainer>
                    <Picture    
                        src="/images/profilepicman.jpg" 
                        alt="profile pic"/>
                    <div>
                        <Name>{ name }</Name>
                        <Label>Employee ID:{'  '}{'  '}</Label>
                        <DetailsText>{id}</DetailsText>
                    </div>
                </UserHeaderContainer>
                <IconContainer>
                    <PenIcon 
                        onClick={() => handleOpen()}
                        icon={faPen}/>
                    <CrossIcon 
                        onClick={() => handleDelete()}
                        icon={faTimes}/>
                </IconContainer>
            </UpperContainer>
            <LowerContainer>
                <DetailsContainer>
                    <LabelContainer>
                        <Label>Birthdate: </Label>
                    </LabelContainer>
                    <DetailsText>{dob}</DetailsText>
                </DetailsContainer>
                <DetailsContainer>
                    <LabelContainer>
                        <Label>Address: </Label>
                    </LabelContainer>
                    <DetailsText>{address}</DetailsText>
                </DetailsContainer>
                <DetailsContainer>
                    <LabelContainer>
                        <Label>Status: </Label>
                    </LabelContainer>
                    <DetailsText>{status}</DetailsText>
                </DetailsContainer>
                <DetailsContainer>
                    <LabelContainer>
                        <Label>Position: </Label>
                    </LabelContainer>
                    <DetailsText>{position}</DetailsText>
                </DetailsContainer>
                <DetailsContainer>
                    <LabelContainer>
                        <Label>Created: </Label>
                    </LabelContainer>
                    <DetailsText>{created}</DetailsText>
                </DetailsContainer>
                <DetailsContainer>
                    <LabelContainer>
                        <Label>Updated: </Label>
                    </LabelContainer>
                    <DetailsText>{updated}</DetailsText>
                </DetailsContainer>
            </LowerContainer>
        </CardContainer>
    );
}

export default EmployeeCard;
