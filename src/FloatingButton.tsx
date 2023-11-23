import React from 'react';
import './ListStyle.css'; // 스타일 시트 파일
import { useEffect } from 'react'

const FloatingButton = ({ count, setCount, setDimensionHeight }) => {

  useEffect(()=>{
    console.log("카운트는?"+count)
    setDimensionHeight(window.innerHeight*count)
  },[count])

  useEffect(()=>{
    console.log("카운트"+count)
  },[])

  return (
    <nav className="jmkim">
      <ul>
        {[...Array(5)].map((_, index) => (
          <li key={index}>
            <button
              type="button"
              className={`nav-bullet ${count === index ? 'current' : ''}`}
              onClick={()=>setCount(index)}
            >
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FloatingButton;