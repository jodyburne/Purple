import React from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import PillButton from '../components/PillButton';
import NavBar from '../components/NavBar';

const Body = styled.div`
    // background: url('/images/curve.svg);
    // z-index: -1;
`;

const UpperContainer = styled.div`
    height: 1078px;
    background-color: #5851EA;
    background-image: url('/images/img-cut-landing.png');
`;

const LowerContainer = styled.div`
    height: 1590px;
`;

const HeadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end; 
    padding: 20px 0;
    margin-top: 100px;
`;

const Header = styled.p`
    color: white;
    font-size: 40px;
`;

const LoremIpsumContainer = styled.div`
    
`;

function Home() {
    let history = useHistory();
    return (
        <Body>
        <UpperContainer>
            {/* <img src="/images/img-cut-landing.png" alt="landing page" /> */}
            <NavBar home />
            <HeadingContainer>
                <Header>Make your Team<br/>the best it can be</Header>
                <PillButton 
                    text="Enter"
                    light
                    callback={() => history.push('/team')} />
                </HeadingContainer>
        </UpperContainer>


        <LowerContainer>
            <LoremIpsumContainer>
                <p>Lorem ipsum dolor sit amet, vel fugit partem noster ut, pri ea essent epicurei, cum nisl assum argumentum ei. Ne unum principes quo, ne sea elit commodo integre, ad justo idque democritum vix.</p>
            </LoremIpsumContainer>
            <div>
            <div style={{position: 'relative', height: 300}}>
                {/* <img  
                    style={{height: 1290, objectFit: 'cover'}}
                    src="/images/curve.svg" /> */}
                <img  
                    style={{position: 'absolute', top: 0, left: 0 }} 
                    src="/images/img-landing.svg" />
            </div>
        </div>
        </LowerContainer>
        </Body>
    );
}

export default Home;