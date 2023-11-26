import React from 'react';
import "./S4.css"
import { FaGithubSquare } from "react-icons/fa";
import styled from 'styled-components';

const ColFlexContainer = styled.div`
    width: 100vw;
    height: 200vh;
    padding: 2rem 6rem;
    background-color: black;
    box-sizing: border-box; /* 추가 */
    display: flex;
    flex-direction: column;
`

const FlexContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const RowFlexContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
`

const LeftProjectDivStyle = styled.div`
    width: 100%;
    height: 25%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: start;
`

const RightProjectDivStyle = styled.div`
    width: 100%;
    height: 25%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: end;
` 

const ProjectDivStyle = styled.div`
    position: relative;
    width: 60%;
    height: 100%;
    padding: 2rem;
    padding-top: 3.2rem;
    display: flex;
    flex-direction: column;
    border: 2px solid #cff37b;
    border-radius: 2rem;
    align-items: start;
`

const LeftProjectTitleDiv = styled.div`
    padding: 0.3rem;
    top: -1.5rem;
    left: -4rem;
    border: 0.1rem solid black;
    background-color: #cff37b;
    position: absolute;
    width : 40%;
    transform: rotate(-7.2deg) translateZ(0);
    border-radius : 2rem;
`

const LeftProjectDateDiv = styled.div`
    padding: 0.3rem;
    top: -1rem;
    right: 2rem;
    position: absolute;
    background-color: black;
`

const RightProjectDateDiv = styled.div`
    padding: 0.3rem;
    top: -1rem;
    left: 2rem;
    position: absolute;
    background-color: black;
`

const RightProjectTitleDiv = styled.div`
    padding: 0.3rem;
    top: -1.5rem;
    right: -4rem;
    border: 0.1rem solid black;
    background-color: #3d155f;
    position: absolute;
    width : 40%;
    transform: rotate(7.2deg) translateZ(0);
    border-radius : 2rem;
`

const SkillHashtagDiv = styled.div`
    padding: 0.2rem;
    border-radius: 0.5rem;
    background-color: white;
    margin: 0.2rem;
`

const LinkIconDiv = styled.div`
    position: absolute;
    bottom: -1rem;
    right: 2rem;
    width: 3rem;
    height: 3rem;
    color: #cff37b;
    z-index: 1000;

    & > svg {
        width: 100%;
        height: 100%;
    }

    &:hover {
        cursor: pointer;
    }
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
    color: #cff37b;
`

const NormalFont = styled.div`
    display: block;
    font-size: 1.17em;
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    margin: 0.1rem;
    color: white;
`

const HashtagFont = styled.div`
    display: block;
    font-size: 1em;
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    margin: 0.1rem;
    color: #213547;
`

const LastDivStyle = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: end;
    width: 100%;
    height: 100%;
`


const S4 = ({handleClick}) => {

    const navigateToUrl = (e, url) => {
        e.stopPropagation();
        window.location.href = url;
    };

    return (
        <ColFlexContainer onClick={handleClick}>
            <h1 style={{padding : "0", lineHeight: "0", color: "white"}}>Project</h1>
            <div style={{padding: "2rem"}}></div>
            <FlexContainer>
                <LeftProjectDivStyle>
                    <ProjectDivStyle>
                        <LeftProjectTitleDiv>
                            <HeaderFont style={{color:"black"}}>RE:Fill</HeaderFont>
                        </LeftProjectTitleDiv>
                        <LeftProjectDateDiv>
                            <NormalFont>
                                2023.07 ~ 2023.08 (6인)
                            </NormalFont>
                        </LeftProjectDateDiv>
                        <RowFlexContainer>
                            <SkillHashtagDiv>
                                <HashtagFont>
                                    TypeScript
                                </HashtagFont>
                            </SkillHashtagDiv>
                            <SkillHashtagDiv>
                                <HashtagFont>
                                    React
                                </HashtagFont>
                            </SkillHashtagDiv>
                            <SkillHashtagDiv>
                                <HashtagFont>
                                    styledComponent
                                </HashtagFont>
                            </SkillHashtagDiv>
                            <SkillHashtagDiv>
                                <HashtagFont>
                                    openVidu
                                </HashtagFont>
                            </SkillHashtagDiv>
                            <SkillHashtagDiv>
                                <HashtagFont>
                                    Redux
                                </HashtagFont>
                            </SkillHashtagDiv>
                            <SkillHashtagDiv>
                                <HashtagFont>
                                    TailwindCSS
                                </HashtagFont>
                            </SkillHashtagDiv>
                        </RowFlexContainer>
                        <div style={{padding:"0.3rem"}}></div>
                        <HeaderFont>
                            SSAFY 공통 : 탈모 AI 자가진단 및 상담 플랫폼
                        </HeaderFont>
                        <div style={{padding:"0.3rem"}}></div>
                        <NormalFont>openVidu 를 활용한 웹 영상 통화 구현</NormalFont>
                        <NormalFont>Naver 지도 API 활용한 POI 탐색</NormalFont>
                        <NormalFont>Naver 지도 API 활용한 POI 탐색</NormalFont>
                        <NormalFont>Naver 지도 API 활용한 POI 탐색</NormalFont>
                        <NormalFont>Naver 지도 API 활용한 POI 탐색</NormalFont>
                        <NormalFont>Naver 지도 API 활용한 POI 탐색</NormalFont>
                        <LinkIconDiv onClick={(e) => navigateToUrl(e,'https://github.com/jaemaning/Refill')}>
                            <FaGithubSquare />
                        </LinkIconDiv>
                    </ProjectDivStyle>
                </LeftProjectDivStyle>
                <div style={{padding:"1rem"}}></div>
                <RightProjectDivStyle>
                    <ProjectDivStyle style={{border:"2px solid #00ff94"}}>
                        <RightProjectTitleDiv style={{backgroundColor:"#00ff94"}}>
                            <HeaderFont style={{color:"black"}}>Samsung ONE</HeaderFont>
                        </RightProjectTitleDiv>
                        <RightProjectDateDiv>
                            <NormalFont>
                                2023.08 ~ 2023.10 (6인)
                            </NormalFont>
                        </RightProjectDateDiv>
                        <RowFlexContainer>
                            <SkillHashtagDiv>
                                <HashtagFont>
                                    TypeScript
                                </HashtagFont>
                            </SkillHashtagDiv>
                            <SkillHashtagDiv>
                                <HashtagFont>
                                    React
                                </HashtagFont>
                            </SkillHashtagDiv>
                            <SkillHashtagDiv>
                                <HashtagFont>
                                    styledComponent
                                </HashtagFont>
                            </SkillHashtagDiv>
                            <SkillHashtagDiv>
                                <HashtagFont>
                                    openVidu
                                </HashtagFont>
                            </SkillHashtagDiv>
                            <SkillHashtagDiv>
                                <HashtagFont>
                                    Redux
                                </HashtagFont>
                            </SkillHashtagDiv>
                            <SkillHashtagDiv>
                                <HashtagFont>
                                    TailwindCSS
                                </HashtagFont>
                            </SkillHashtagDiv>
                        </RowFlexContainer>
                        <div style={{padding:"0.3rem"}}></div>
                        <HeaderFont>
                            SSAFY 공통 : 탈모 AI 자가진단 및 상담 플랫폼
                        </HeaderFont>
                        <div style={{padding:"0.3rem"}}></div>
                        <NormalFont>Naver 지도 API 활용한 POI 탐색</NormalFont>
                        <NormalFont>Naver 지도 API 활용한 POI 탐색</NormalFont>
                        <NormalFont>Naver 지도 API 활용한 POI 탐색</NormalFont>
                        <NormalFont>Naver 지도 API 활용한 POI 탐색</NormalFont>
                        <NormalFont>Naver 지도 API 활용한 POI 탐색</NormalFont>
                        <LinkIconDiv style={{color:"#00ff94"}} onClick={(e) => navigateToUrl(e,'https://github.com/jaemaning/ONE')}>
                            <FaGithubSquare />
                        </LinkIconDiv>
                    </ProjectDivStyle>
                </RightProjectDivStyle>
                <div style={{padding:"1rem"}}></div>
                <LeftProjectDivStyle>
                    <ProjectDivStyle>
                        <LeftProjectTitleDiv>
                            <HeaderFont style={{color:"black"}}>BooKing</HeaderFont>
                        </LeftProjectTitleDiv>
                        <LeftProjectDateDiv>
                            <NormalFont>
                                2023.10 ~ 2023.11 (6인)
                            </NormalFont>
                        </LeftProjectDateDiv>
                        <RowFlexContainer>
                            <SkillHashtagDiv>
                                <HashtagFont>
                                    TypeScript
                                </HashtagFont>
                            </SkillHashtagDiv>
                            <SkillHashtagDiv>
                                <HashtagFont>
                                    React
                                </HashtagFont>
                            </SkillHashtagDiv>
                            <SkillHashtagDiv>
                                <HashtagFont>
                                    styledComponent
                                </HashtagFont>
                            </SkillHashtagDiv>
                            <SkillHashtagDiv>
                                <HashtagFont>
                                    openVidu
                                </HashtagFont>
                            </SkillHashtagDiv>
                            <SkillHashtagDiv>
                                <HashtagFont>
                                    Redux
                                </HashtagFont>
                            </SkillHashtagDiv>
                            <SkillHashtagDiv>
                                <HashtagFont>
                                    TailwindCSS
                                </HashtagFont>
                            </SkillHashtagDiv>
                        </RowFlexContainer>
                        <div style={{padding:"0.3rem"}}></div>
                        <HeaderFont>
                            SSAFY 자율 : 오프라인 독서모임 관리 App
                        </HeaderFont>
                        <div style={{padding:"0.3rem"}}></div>
                        <NormalFont>Naver 지도 API 활용한 POI 탐색</NormalFont>
                        <NormalFont>Naver 지도 API 활용한 POI 탐색</NormalFont>
                        <NormalFont>Naver 지도 API 활용한 POI 탐색</NormalFont>
                        <NormalFont>Naver 지도 API 활용한 POI 탐색</NormalFont>
                        <NormalFont>Naver 지도 API 활용한 POI 탐색</NormalFont>
                        <LinkIconDiv onClick={(e) => navigateToUrl(e,'https://github.com/jaemaning/BooKing')}>
                            <FaGithubSquare />
                        </LinkIconDiv>
                    </ProjectDivStyle>
                </LeftProjectDivStyle>
                <LastDivStyle>
                    <HeaderFont style={{color: "#888888"}}>
                        Develop by. Jaeman Kim
                    </HeaderFont>
                </LastDivStyle>
            </FlexContainer>
        </ColFlexContainer>
    );
};

export default S4;