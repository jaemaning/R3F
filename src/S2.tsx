import React from 'react';
import "./S2.css"
import styled from 'styled-components';

const FlexContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #cff37b;
    box-sizing: border-box; /* 추가 */
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ImageContainer = styled.img`
    width: 35vw;
    height: auto;
    padding : 2rem;
`

const SecondDivBox = styled.div`
    width: 20vw;
    height: auto;
    padding : 2rem;
`



const S2 = ({handleClick}) => {
    return (
        <FlexContainer onClick={handleClick}>
            <ImageContainer src="../src/assets/mainProfile.jpg" alt="main"></ImageContainer>
            <SecondDivBox>Item 2</SecondDivBox>
            <div>Item 3</div>
        </FlexContainer>
    );
};

export default S2;