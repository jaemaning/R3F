import React from 'react';
import "./S2.css"
import styled, { keyframes, css } from 'styled-components';
import { useState, useEffect } from 'react'


const FlexContainer = styled.div`
width: 100vw;
height: 100vh;
background-color: #cff37b;
box-sizing: border-box; /* 추가 */
padding: 2rem 6rem;
display: flex;
justify-content: space-between;
align-items: center;
`

const slideInFromLeft = keyframes`
    0% {
    transform: translateX(-100%) translateY(-50%);
    opacity: 0;
    }
    100% {
    transform: translateX(0) translateY(0);
    opacity: 1;
    }
`;

const slideOutToLeft = keyframes`
    0% {
    transform: translateX(0) translateY(0);
    opacity: 0;
    }
    100% {
    transform: translateX(-100%) translateY(0%);
    opacity: 1;
    }
`;

const slideInFromRight = keyframes`
    0% {
    transform: translateX(100%) translateY(50%);
    opacity: 0;
    }
    100% {
    transform: translateX(0) translateY(0);
    opacity: 1;
    }
`;

const slideOutToRight = keyframes`
    0% {
    transform: translateX(0) translateY(0);
    opacity: 0;
    }
    100% {
    transform: translateX(100%) translateY(10%);
    opacity: 1;
    }
`;

const ImageContainer = styled.img`
    width: 33vw;
    height: auto;
    padding: 2rem;
    animation: ${({ $isVisible }) => $isVisible ? css`${slideInFromLeft} 1s ease-out` : css`${slideOutToLeft} 1s ease-out`};
`;

const SecondDivBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 42vw;
    height: auto;
    padding : 2rem;
    animation: ${({ $isVisible }) => $isVisible ? css`${slideInFromRight} 1s ease-out` : css`${slideOutToRight} 1s ease-out`};
`

const SecondDivTitleItem = styled.div`
display: block;
width: 100%;
text-align: left;
font-weight: bold;
`

const SecondDivSubItem = styled.div`
display: block;
width: 100%;
text-align: left;
`

const SecondDivFlexItem = styled.div`
    display: flex;
    width: 100%;
`


const S2 = ({handleClick, count}) => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(()=>{
        if (count === 1) {
            setIsVisible(true)
            console.log("?????")
        } else {
            setIsVisible(false)
        }
        console.log(count)
    },[count])

    return (
        <FlexContainer onClick={handleClick}>
            <ImageContainer src="../src/assets/mainProfile.jpg" alt="main" $isVisible={isVisible}></ImageContainer>
            <SecondDivBox $isVisible={isVisible}>
                <SecondDivSubItem>                
                    <h1 style={{textAlign: 'left', width: '100%', lineHeight: '0'}}>Jaeman Kim</h1>
                    <p style={{color: 'grey', textAlign: 'left', width: '100%'}}>FrontEnd Developer / Data Scientist</p>
                </SecondDivSubItem>
                <div style={{padding: '2vh'}}></div>
                <SecondDivFlexItem>
                    <SecondDivSubItem>
                        <SecondDivTitleItem>📧 E-mail</SecondDivTitleItem>
                        <SecondDivSubItem>lovesay00@gmail.com</SecondDivSubItem>
                        <div style={{padding: '1vh'}}></div>
                        <SecondDivTitleItem>📞 Contact</SecondDivTitleItem>
                        <SecondDivSubItem>010-2484-0253</SecondDivSubItem>
                        <div style={{padding: '1vh'}}></div>
                        <SecondDivTitleItem>📁 Github</SecondDivTitleItem>
                        <SecondDivSubItem>https://github.com/jaemaning</SecondDivSubItem>
                        <div style={{padding: '1vh'}}></div>
                        <SecondDivTitleItem>📷 Instagram</SecondDivTitleItem>
                        <SecondDivSubItem>https://www.instagram/k_jaemjaem</SecondDivSubItem>
                    </SecondDivSubItem>
                    <SecondDivSubItem>
                        <SecondDivTitleItem>📋 Certificate</SecondDivTitleItem>
                        <div style={{padding: '1vh'}}></div>
                        <SecondDivTitleItem>해양환경기사</SecondDivTitleItem>
                        <SecondDivTitleItem>대기환경기사</SecondDivTitleItem>
                        <SecondDivTitleItem>산업안전기사</SecondDivTitleItem>
                        <SecondDivTitleItem>정보처리기사</SecondDivTitleItem>
                        <SecondDivTitleItem>컴퓨터활용능력 1급</SecondDivTitleItem>
                        <SecondDivTitleItem>Opic IM2</SecondDivTitleItem>
                    </SecondDivSubItem>
                </SecondDivFlexItem>
                <div style={{padding: '2vh'}}></div>
                <SecondDivSubItem>
                    <SecondDivTitleItem>😀 Profile</SecondDivTitleItem>
                    <div style={{padding: '1vh'}}></div>
                    <SecondDivTitleItem>전남대학교 해양환경 & 대기환경과학과(해양 물리 시스템 연구실 학부 연구생)</SecondDivTitleItem>
                    <SecondDivSubItem>Python, Matlab 을 이용한 데이터 수집 및 전처리</SecondDivSubItem>
                    <SecondDivSubItem>2013.03 ~ 2020.02</SecondDivSubItem>
                    <div style={{padding: '1vh'}}></div>
                    <SecondDivTitleItem>지오시스템 리서치(국립해양조사원 시스템 엔지니어)</SecondDivTitleItem>
                    <SecondDivSubItem>Linux 서버 관리 및 Python 을 이용한 데이터 처리 및 시각화</SecondDivSubItem>
                    <SecondDivSubItem>2021.12 ~ 2022.04</SecondDivSubItem>
                    <div style={{padding: '1vh'}}></div>
                    <SecondDivTitleItem>SSAFY (Samsung Software Academy)</SecondDivTitleItem>
                    <SecondDivSubItem>비전공 Python Track 진행 중</SecondDivSubItem>
                    <SecondDivSubItem>2023.01 ~ Now</SecondDivSubItem>
                </SecondDivSubItem>
            </SecondDivBox>
        </FlexContainer>
    );
};

export default S2;