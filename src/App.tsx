import { useState, useEffect } from 'react'
import './App.css'
import S1 from "./S1"
import S2 from "./S2"
import S3 from "./S3"
import S4 from "./S4"
import S5 from "./S5"
import FloatingButton from "./FloatingButton"


function App() {
  const [count, setCount] = useState(0)
  const [dimensionHeight, setDimensionHeight] = useState(0)

  useEffect(()=>{
    if (dimensionHeight < window.innerHeight*5) {
      window.scrollTo({
        behavior: "smooth",
        top: dimensionHeight
      });
    } else {
      setDimensionHeight(0)
      setCount(0)
      window.scrollTo({
        behavior: "smooth",
        top: 0
      })
    }
  }, [dimensionHeight, count])

  function handleClick(e : click) {
    console.log(e)
    e.preventDefault
    setCount(count+1)
    setDimensionHeight(window.innerHeight*count)
  }

  return (
    <div id="canvas">
      <S1 handleClick={handleClick}></S1>
      <S2 handleClick={handleClick}></S2>
      <S3 handleClick={handleClick}></S3>
      <S4 handleClick={handleClick}></S4>
      <S5 handleClick={handleClick}></S5>
      <FloatingButton count={count} setCount={setCount} setDimensionHeight={setDimensionHeight} dimensionHeight={dimensionHeight}></FloatingButton>
    </div>
  )
}

export default App
