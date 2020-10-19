import React from 'react';
import { useLocation } from "react-router-dom";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faDribbble, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Container = styled.div`
    position: absolute;
    bottom: 0;
    background-color: #5851EA;
    height: 500px;
    width: 100%;
`;

const InfoContainer = styled.div`
    width: 900px
    height: 300px;
    position: absolute;
    z-index: 1;
    top: 15%;
    left: 20%;
    display: flex;
    border-bottom: 1px solid white;
    padding: 20px; 
`;
    
const LeftInfoContainer = styled.div`
    margin-top: 15px;
    width: 260px;
`;

const Column = styled.div`
    @media (max-width: 1200px) {
        display: none;
    };
    @media (min-width: 1200px) {
        flex: display;
        flex-direction: column;
        margin-left: 150px;
    };
`;

const InfoSubheading = styled.p`
    color: white;
    font-weight: 700;
`;

const InfoText = styled.p`
    color: white;
    font-size: 12px;
`;

const Logo = styled.img`
    height: 30px;
`;

const Icon = styled(FontAwesomeIcon)`
    color: white;
    font-size: 25px;
    margin: 10px 35px 0 0;
`;

const CreditsContainer = styled.div`
    position: absolute;
    top: 72%;
    left: 45%;
`;

const FooterCircles = styled.img`
    position: absolute;
    bottom: 15px;
    left: 0;
    width: 100%;
    display: ${({ home }) => !home && 'none'};
`;

const FooterCurve = styled.img`
    margin-top: 80px;
    height: 80%;
    width: 100%;
`;

function Footer() {
    let location = useLocation();
    const { pathname } = location;
    let home = false;
    if (pathname === '/') {
        home = true;
    }

    return (
        <Container>
            <FooterCircles 
                alt="circles"
                home={home} 
                src="/images/circle-footer.png" />
            <InfoContainer>
                <LeftInfoContainer>
                    <Logo 
                        alt="logo" 
                        src="/images/logo.png" />
                    <InfoText>Me old mucker Harry don't get shirty with me he nicked it up the kyver gutted mate spend a penny, bloke my good sir in my flat bleeding quaint! </InfoText>
                    <div>
                        <Icon icon={faFacebookF} />
                        <Icon icon={faTwitter} />
                        <Icon icon={faDribbble} />
                        <Icon icon={faLinkedinIn} />
                    </div>
                </LeftInfoContainer>
                <Column>
                    <InfoSubheading>Company</InfoSubheading>
                    <InfoText>Home</InfoText>
                    <InfoText>Features</InfoText>
                    <InfoText>Screenshots</InfoText>
                    <InfoText>Pricing</InfoText>
                    <InfoText>Team</InfoText>
                </Column>
                <Column>
                    <InfoSubheading>Help</InfoSubheading>
                    <InfoText>Help Center</InfoText>
                    <InfoText>FAQ's</InfoText>
                    <InfoText>Terms & Conditions</InfoText>
                    <InfoText>Privacy</InfoText>
                    <InfoText>Contacts</InfoText>
                </Column>
                <Column>
                    <InfoSubheading>Solutions</InfoSubheading>
                    <InfoText>Consumer</InfoText>
                    <InfoText>Saas</InfoText>
                    <InfoText>Education</InfoText>
                    <InfoText>Gaming</InfoText>
                    <InfoText>Financial Services</InfoText>
                </Column>
            </InfoContainer>
            <CreditsContainer>
                <InfoText>© indianpix | All rights reserved 2019</InfoText>
            </CreditsContainer>   
            <FooterCurve 
                alt="curve"
                src='/images/curve-1.png' />
        </Container>
    );
}

export default Footer;
