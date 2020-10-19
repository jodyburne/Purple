import React from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import PillButton from '../components/PillButton';
import NavBar from '../components/NavBar';

const UpperContainer = styled.div`
    height: 1078px;
    background-color: #5851EA;
    background-image: url('/images/img-cut-landing.png');
`;

const LowerContainer = styled.div`
    position: relative;
    @media (max-width: 1260px) {
        height: 1000px;
    };
    @media (min-width: 1260px) {
        height: 1590px;

    };
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
    height: 250px;
    width: 800px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: grey;
    font-family: 'Open Sans', sans-serif; 
    margin: 0 auto;
`;

const SubHeading = styled.p`
    font-size: 35px;
    font-weight: 600;
    opacity: 0.8;
    margin-bottom: 15px; 
`;

const LoremText = styled.div`
    text-align: center;  
`;
    
const BlueLine = styled.div`
    width: 70px;
    border-bottom: 1px blue solid;
    margin-bottom: 35px;
`;

const ImageContainer = styled.div`
    @media (max-width: 1260px) {
        display: none;
    };
    @media (min-width: 1260px) {
        width: 960px;
        background-color: white;
    };
`;

const LowerMainContainer = styled.div`
    display: flex;
    align-items: center;
`;

const AugmentedRealityContainer = styled.div`
    @media (max-width: 1260px) {
        margin:  200px;
    };
    @media (min-width: 1260px) {
        margin: 0 0 300px 100px;
        width: 500px;
        height: 350px;
    };
`;

const AugmentedRealityParagraph = styled.p`
    color: grey;
    font-family: 'Open Sans', sans-serif; 
    line-height: 2;
    margin-top: 20px;
`;

const LineContainer = styled.div`
    display: flex;
`;

const SmallLine = styled.div`
    width: 30px;
    margin-right:3px;
    border-bottom: 2px solid transparent;

    -moz-border-image: -moz-linear-gradient(left, #0276FD 0%, #5851EA 100%);
    -webkit-border-image: -webkit-linear-gradient(left, #0276FD 0%, #5851EA 100%);
    border-image: linear-gradient(to right, #0276FD 0%, #5851EA 100%);
    border-image-slice: 1;
`;

const LargeLine = styled.div`
    width: 70px;
    border-bottom: 2px solid transparent;

      -moz-border-image: -moz-linear-gradient(left, #0276FD 0%, #5851EA 100%);
      -webkit-border-image: -webkit-linear-gradient(left, #0276FD 0%, #5851EA 100%);
      border-image: linear-gradient(to right, #0276FD 0%, #5851EA 100%);
      border-image-slice: 1;
`;

const CircleContainer = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    max-width: 240px;
    overflow: hidden;
    z-index: -1;
`;

function Home() {
    let history = useHistory();
    return (
        <div>
            <UpperContainer>
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
                    <BlueLine />
                    <LoremText>Lorem ipsum dolor sit amet, vel fugit partem noster ut, pri ea essent epicurei, cum nisl assum argumentum ei. Ne unum principes quo, ne sea elit commodo integre, ad justo idque democritum vix.</LoremText>
                </LoremIpsumContainer>
                <LowerMainContainer>
                    <ImageContainer>
                        <img  
                            alt="landing"
                            src="/images/img-landing.svg" />
                    </ImageContainer>
                    <AugmentedRealityContainer>
                        <SubHeading>Augmented reality</SubHeading>
                        <LineContainer>
                            <SmallLine />
                            <LargeLine />
                        </LineContainer>
                        <AugmentedRealityParagraph>An ius wisi assum possit, eam ut paulo fabulas, cum et fabellas consequuntur necessitatibus. Ad vis consul omittam, dicat vivendo consequat cu eos. Sit alia diceret id, cu eam antiopam dignissim. Sea soluta dolorem persequeris ex, vis in quem augue nominati. Ea reque appareat vim.</AugmentedRealityParagraph>
                        <PillButton 
                            text="LEARN MORE"
                            callback={() => history.push('/team')}/>
                    </AugmentedRealityContainer>
                </LowerMainContainer>
                <CircleContainer>
                    <img 
                        alt="circle"
                        src="/images/circle.png" />
                </CircleContainer>
            </LowerContainer>
        </div>
    );
}

export default Home;