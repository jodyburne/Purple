import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
    font-family: inherit;
    border: none;
    cursor: pointer;
    ${({ light }) =>
    light ?
    css`
        color: blue;
        background-color: white;
        width: 220px;
        height: 60px;
        border-radius: 35px;
        font-size: 14px;
    ` : 
    css`
        color: white;
        background-color: #5851EA;
        width: 200px;
        height: 50px;
        border-radius: 40px;
        font-size: 18px;
        box-shadow: 3px 10px 10px 5px #e8e8e8;
    `};
`;

function PillButton({ text, light, callback }) {
    return (
        <div>
            <Button 
                onClick={callback}
                light={light}>{text}
            </Button>
        </div>
    );
}

export default PillButton;