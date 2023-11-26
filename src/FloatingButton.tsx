import React from 'react';
// import './ListStyle.css'; // 스타일 시트 파일
import { useEffect } from 'react'
import styled from 'styled-components';

const FloatingButtonDiv = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: fixed;
  right: 3vw;
  bottom: 40vh;
  z-index: 1000;
`;

const ButtonItem = styled.li`
  margin-bottom: 12px;
`;

const NavBullet = styled.button<{ $count: number }>`
  position: relative;
  width: 1.1em;
  height: 1.1em;
  border: 1px solid transparent;
  background-color: transparent;

  &::after {
    content: '';
    display: block;
    width: 60%;
    height: 60%;
    background-color: ${({ $count }) => $count != 2 ? "#4a33d7" : "#cff37b"};
    transform: rotate(45deg);
    position: absolute;
    top: 0;
    left: 0;
    transform-origin: center;
    cursor: pointer;
    transition: transform 0.5s ease, width 0.5s ease, height 0.5s ease, background-color 0.5s ease, border 0.5s ease;
  }

  &.current::after {
    transform: rotate(0) scale(2);
    background: transparent;
    border: ${({ $count }) => $count != 2 ? "#4a33d7 solid 1px" : "#cff37b solid 1px"};
    transition: transform 0.5s ease, width 0.5s ease, height 0.5s ease, background-color 0.5s ease, border 0.5s ease;
  }
`;

type FloatingButtonProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  setDimensionHeight: React.Dispatch<React.SetStateAction<number>>;
}

const FloatingButton = ({ count, setCount, setDimensionHeight }: FloatingButtonProps) => {

  useEffect(()=>{
    console.log("카운트는?"+count)
    setDimensionHeight(window.innerHeight*count)
  },[count])

  useEffect(()=>{
    console.log("카운트"+count)
  },[])

  return (
    <nav className="jmkim">
      <FloatingButtonDiv>
        {[...Array(5)].map((_, index) => (
          <ButtonItem key={index}>
            <NavBullet
              type="button"
              $count={count}
              className={`nav-bullet ${count === index ? 'current' : ''}`}
              onClick={()=>setCount(index)}
            >
            </NavBullet>
          </ButtonItem>
        ))}
      </FloatingButtonDiv>
    </nav>
  );
};

export default FloatingButton;