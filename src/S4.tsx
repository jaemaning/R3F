import React from 'react';
import "./S4.css"

import styled from 'styled-components';

const ColFlexContainer = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 2rem 6rem;
    background-color: #7bf3a5;
    box-sizing: border-box; /* 추가 */
    display: flex;
    flex-direction: column;
`

const FlexContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const SecondDivBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    padding : 2rem;
`


const S4 = ({handleClick}) => {
    return (
        <ColFlexContainer onClick={handleClick}>
            <h1 style={{padding : "0", lineHeight: "0"}}>Project</h1>
            <FlexContainer>
                <SecondDivBox>
                    <p>kotlin</p>
                    <p>python</p>
                </SecondDivBox>
                <SecondDivBox>item2</SecondDivBox>
            </FlexContainer>
        </ColFlexContainer>
    );
};

export default S4;