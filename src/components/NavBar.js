import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;       
    background-color: ${props=> props.home ? 'none' : '#5851EA'};
    height: 108px;
`;

const LinksContainer = styled.div`
    @media (max-width: 800px) {
        display: none;
    };
    @media (min-width: 800px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-right: ${props=> props.home ? '300px' : '130px'};
        width: ${props=> props.home ? '310px' : '485px'};
    };
`;

const LinkText = styled.p`
    font-size: 14px;
    color: white;
    font-weight: ${props => props.selected ? 700 : 600};
`;

const SmallLinkText = styled.p`
    color: white;
    font-size: 12px;
`;

const Button = styled.button`
    width: 140px;
    height: 40px;
    border-radius: 20px;
    border: none;
    font-family: inherit;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;
    
const ButtonText = styled.p`
    color: #5851EA;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;

const SmallMenuContainer = styled.div`
    @media (max-width: 800px) {
        margin: 0 50px;
    };
    @media (min-width: 800px) {
        display: none;
    };
`;

const Logo = styled.img`
    height: 34px;
    @media (max-width: 1050px) {
        margin-left: 50px;
    };
    @media (min-width: 1050px) {
        margin-left: 280px;
    };
`;

function NavBar({ home }) {

    return (
        <Container home={home} >
            <Logo 
                src="/images/logo.png" 
                alt="logo" />
                <SmallMenuContainer>
                    <StyledLink to="/">
                        <SmallLinkText>
                            <FontAwesomeIcon icon={faAngleRight}/>
                             Home
                        </SmallLinkText>
                    </StyledLink>
                    <StyledLink to="/team">
                        <SmallLinkText>
                            <FontAwesomeIcon icon={faAngleRight}/> 
                            Team
                        </SmallLinkText>
                    </StyledLink>
                    <StyledLink to="/newemployee">
                        <SmallLinkText>
                            <FontAwesomeIcon icon={faAngleRight}/> 
                            New Employee
                        </SmallLinkText>
                    </StyledLink>
                </SmallMenuContainer>
            { home ? (
                <LinksContainer home={home}>
                    <LinkText selected >Home</LinkText>
                    <LinkText>Absences</LinkText>
                    <StyledLink to="/team">
                        <LinkText>Employees</LinkText>
                    </StyledLink>
                </LinksContainer>
            ) : (
            <LinksContainer home={home}>
                <StyledLink to="/">
                    <LinkText>Home</LinkText>
                </StyledLink>
                <LinkText>Absences</LinkText>
                <StyledLink to="/team">
                    <LinkText selected>Employees</LinkText>
                </StyledLink>
                <Button>
                    <StyledLink to="/newemployee">
                        <ButtonText>New Employee</ButtonText>
                    </StyledLink>
                </Button>
            </LinksContainer>
            )}
        </Container>
    );
}

export default NavBar;