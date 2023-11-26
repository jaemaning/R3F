import React from 'react';
import "./S3.css"
import styled from 'styled-components';

const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 2rem 6rem;
    background-color: #f3bd7b;
    box-sizing: border-box;
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

const ColFlexContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const SecondDivBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding : 2rem;
`

const BarDivBox = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: end;
    width: 100%;
    height: 100%;
    padding : 2rem;
`

const TitleDivBox = styled.div`
    height: 8rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`

const LevelTitleDivBox = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding : 2rem;
`

const HeaderFont = styled.div`
    display: block;
    font-size: 1.17em;
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    margin: 0.3rem;
`


const S3 = ({handleClick}) => {

    return (
        <MainContainer onClick={handleClick}>
            <h1 style={{padding : "0", lineHeight: "0"}}>Skill / Awards</h1>
            <FlexContainer>
                <ColFlexContainer>
                    <SecondDivBox>
                        <LevelTitleDivBox>
                            {/* <HeaderFont>프로젝트에서 자주 사용했고 복잡한 알고리즘 응용이 가능해요!</HeaderFont> */}
                            <HeaderFont>중상</HeaderFont>
                        </LevelTitleDivBox>
                        <LevelTitleDivBox>
                            {/* <HeaderFont>프로젝트에 적용한 경험이 있어요!</HeaderFont> */}
                            <HeaderFont>중</HeaderFont>
                        </LevelTitleDivBox>
                        <LevelTitleDivBox>
                            {/* <HeaderFont>간단한 알고리즘 문제 풀이가 가능해요!</HeaderFont> */}
                            <HeaderFont>하</HeaderFont>
                        </LevelTitleDivBox>
                    </SecondDivBox>
                    <SecondDivBox>
                        <BarDivBox>
                            <svg width="100%" height="30px" style={{alignItem: 'center', display: 'flex', justifyContent: 'center'}}>
                                <rect width="100%" height="30px" style={{fill: 'blue'}} />
                            </svg>
                            <TitleDivBox>
                                <HeaderFont>Kotlin</HeaderFont>
                                <HeaderFont>Python</HeaderFont>
                                <HeaderFont>Git</HeaderFont>
                            </TitleDivBox>
                        </BarDivBox>
                        <BarDivBox>
                            <TitleDivBox>
                                <HeaderFont>javaScript</HeaderFont>
                                <HeaderFont>Linux</HeaderFont>
                                <HeaderFont>Jira</HeaderFont>
                            </TitleDivBox>
                        </BarDivBox>
                        <BarDivBox>
                            <TitleDivBox>
                                <HeaderFont>Java</HeaderFont>
                                <HeaderFont>C++</HeaderFont>
                            </TitleDivBox>
                        </BarDivBox>
                    </SecondDivBox>
                </ColFlexContainer>


                <SecondDivBox>
                    item2
                </SecondDivBox>

            </FlexContainer>
        </MainContainer>
    );
};

export default S3;