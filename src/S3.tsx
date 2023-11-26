import { useState } from 'react';
import "./S3.css"
import styled from 'styled-components';
import { FaReact, FaHtml5, FaCss3Alt, FaVuejs, FaGithubSquare } from "react-icons/fa";
import { SiJetpackcompose, SiJirasoftware } from "react-icons/si";
import { GiSpiralHilt } from "react-icons/gi";

const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 2rem 6rem;
    background-color: #4831d4;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`

const FlexContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 5vh 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const FlexImgContainer = styled.div`
    width: 100%;
    height: 13vh;
    display: flex;
    justify-content: space-evenly;
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
    justify-content: end;
    width: 100%;
    height: 100%;
    padding : 2rem;
`

const HeaderFont = styled.div`
    display: block;
    font-size: 1.5em;
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    margin: 0.3rem;
    color: white;
`

const NormalFont = styled.div`
    display: block;
    font-size: 1.17em;
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    margin: 0.3rem;
    color: #cff37b;
`

const ColImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const IconStyle = styled.span`
    color: white;
    width: 50px;
    height: 50px;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    & > svg {
        width: 100%;
        height: 100%;
    }
`;


const S3 = ({handleClick}: { handleClick: (event: React.MouseEvent) => void }) => {
    const [handleHover, setHandleHover] = useState(0)

    const handleMouseEnter = (c: number) => {
        setHandleHover(c)
    }

    const handleMouseLeave = () => {
        setHandleHover(0)
    }

    return (
        <MainContainer onClick={handleClick}>
            <h1 style={{padding : "0", lineHeight: "0", color: "#cff37b"}}>Skill / Awards</h1>
            <FlexContainer>
                <ColFlexContainer>
                    <SecondDivBox>
                        <LevelTitleDivBox>
                            {
                                handleHover === 1 && (
                                    <NormalFont>프로젝트에서 자주 사용했고 복잡한 알고리즘 응용이 가능해요!</NormalFont>
                                )
                            }
                            <div style={{padding: '1vh'}}></div>
                            <HeaderFont onMouseEnter={()=>handleMouseEnter(1)} onMouseLeave={()=>{handleMouseLeave()}}>중상</HeaderFont>
                        </LevelTitleDivBox>
                        <LevelTitleDivBox>
                            {
                                handleHover === 2 && (
                                    <NormalFont>프로젝트에 적용한 경험이 있어요!</NormalFont>
                                )
                            }
                            <div style={{padding: '1vh'}}></div>
                            <HeaderFont onMouseEnter={()=>handleMouseEnter(2)} onMouseLeave={()=>{handleMouseLeave()}}>중</HeaderFont>
                        </LevelTitleDivBox>
                        <LevelTitleDivBox>
                            {
                                handleHover === 3 && (
                                    <NormalFont>간단한 알고리즘 문제 풀이가 가능해요!</NormalFont>
                                )
                            }
                            <div style={{padding: '1vh'}}></div>
                            <HeaderFont onMouseEnter={()=>handleMouseEnter(3)} onMouseLeave={()=>{handleMouseLeave()}}>하</HeaderFont>
                        </LevelTitleDivBox>
                    </SecondDivBox>
                    <SecondDivBox>
                        <BarDivBox onMouseEnter={()=>handleMouseEnter(1)} onMouseLeave={()=>{handleMouseLeave()}}>
                            <svg width="100%" height="30px" style={{alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                                <rect width="100%" height="30px" style={{fill: '#cff37b'}} />
                            </svg>
                            <div style={{padding: '0.5vh'}}></div>
                            <svg width="100%" height="30px" style={{alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                                <rect width="100%" height="30px" style={{fill: '#cff37b'}} />
                            </svg>
                            <div style={{padding: '0.5vh'}}></div>
                            <svg width="100%" height="30px" style={{alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                                <rect width="100%" height="30px" style={{fill: '#cff37b'}} />
                            </svg>
                            <div style={{padding: '0.5vh'}}></div>
                            <svg width="100%" height="30px" style={{alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                                <rect width="100%" height="30px" style={{fill: '#cff37b'}} />
                            </svg>
                            <TitleDivBox>
                                <HeaderFont>Kotlin</HeaderFont>
                                <HeaderFont>Python</HeaderFont>
                            </TitleDivBox>
                        </BarDivBox>
                        <BarDivBox onMouseEnter={()=>handleMouseEnter(2)} onMouseLeave={()=>{handleMouseLeave()}}>
                            <svg width="100%" height="30px" style={{alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                                <rect width="100%" height="30px" style={{fill: '#cff37b'}} />
                            </svg>
                            <div style={{padding: '0.5vh'}}></div>
                            <svg width="100%" height="30px" style={{alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                                <rect width="100%" height="30px" style={{fill: '#cff37b'}} />
                            </svg>
                            <div style={{padding: '0.5vh'}}></div>
                            <svg width="100%" height="30px" style={{alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                                <rect width="100%" height="30px" style={{fill: '#cff37b'}} />
                            </svg>
                            <TitleDivBox>
                                <HeaderFont>javaScript</HeaderFont>
                                <HeaderFont>(TypeScript)</HeaderFont>
                            </TitleDivBox>
                        </BarDivBox>
                        <BarDivBox onMouseEnter={()=>handleMouseEnter(3)} onMouseLeave={()=>{handleMouseLeave()}}>
                            <svg width="100%" height="15px" style={{alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                                <rect width="100%" height="15px" style={{fill: '#cff37b'}} />
                            </svg>
                            <div style={{padding: '0.5vh'}}></div>
                            <svg width="100%" height="30px" style={{alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                                <rect width="100%" height="30px" style={{fill: '#cff37b'}} />
                            </svg>
                            <TitleDivBox>
                                <HeaderFont>Java</HeaderFont>
                                <HeaderFont>C++</HeaderFont>
                            </TitleDivBox>
                        </BarDivBox>
                    </SecondDivBox>
                </ColFlexContainer>
                <div style={{padding: '3vh'}}></div>

                <ColFlexContainer>
                    <div style={{padding: '1vh'}}></div>
                    <HeaderFont>Web</HeaderFont>
                    <FlexImgContainer>
                        <ColImgContainer>
                            <IconStyle><FaHtml5 style={{color:"#df4a17"}} /></IconStyle>
                            <NormalFont>HTML</NormalFont>
                        </ColImgContainer>
                        <ColImgContainer>
                            <IconStyle><FaCss3Alt style={{color:"#2196f3"}} /></IconStyle>
                            <NormalFont>CSS</NormalFont>
                        </ColImgContainer>
                        <ColImgContainer>
                            <IconStyle><FaReact style={{color:"#00d8ff"}} /></IconStyle>
                            <NormalFont>React</NormalFont>
                        </ColImgContainer>
                        <ColImgContainer>
                            <IconStyle><FaVuejs style={{color:"#41b883"}} /></IconStyle>
                            <NormalFont>Vue</NormalFont>
                        </ColImgContainer>
                    </FlexImgContainer>
                    <div style={{padding: '1vh'}}></div>
                    <HeaderFont>App(Android)</HeaderFont>
                    <FlexImgContainer>
                        <ColImgContainer>
                            <IconStyle><GiSpiralHilt style={{color:"#9ab8c1"}} /></IconStyle>
                            <NormalFont>Hilt</NormalFont>
                        </ColImgContainer>
                        <ColImgContainer>
                            <IconStyle><SiJetpackcompose style={{color:"#2fc781"}} /></IconStyle>
                            <NormalFont>Jetpack Compose</NormalFont>
                        </ColImgContainer>
                    </FlexImgContainer>
                    <div style={{padding: '1vh'}}></div>
                    <HeaderFont>etc..</HeaderFont>
                    <FlexImgContainer>
                        <ColImgContainer>
                            <IconStyle><FaGithubSquare /></IconStyle>
                            <NormalFont>Git</NormalFont>
                        </ColImgContainer>
                        <ColImgContainer>
                            <IconStyle><SiJirasoftware style={{color:"#2684ff"}} /></IconStyle>
                            <NormalFont>Jira</NormalFont>
                        </ColImgContainer>
                    </FlexImgContainer>
                    <div style={{padding: '1vh'}}></div>
                    <HeaderFont>Awards</HeaderFont>
                    <NormalFont>SSAFY 1학기 성적 우수상</NormalFont>
                    <NormalFont>SSAFY SDC Korea Project 2위</NormalFont>

                </ColFlexContainer>

            </FlexContainer>
        </MainContainer>
    );
};

export default S3;