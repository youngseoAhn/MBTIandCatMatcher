import React from "react";
import styled from "styled-components";

const StyledHome = styled.button `
    background-color: #FF7E00;
    margin-top: 35pt;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 18pt;
    color: white;
    width: 150px;
    height: 60px;
    border-radius: 10px;
    border: none;

`

const HomeButton = ({onClick, label}) => {
    return (
        <StyledHome onClick={onClick}>
             {label}
        </StyledHome>
    );
}

export default HomeButton;