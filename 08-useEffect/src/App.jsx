import React, { useEffect, useState } from 'react'

function App() {

  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(100)

  useEffect(function(){
    console.log("useEffect is Running...")
  }, [num])

  return (
    <div>
      <h1>value is {num}</h1>
      <h1>value is {num2}</h1>

      <button onMouseEnter={()=>{
        setNum(num+1)
      }}
      onMouseLeave={()=>{
        setNum2(num2+10)
      }}
      >
          Click
      </button>
    </div>
  )
}

export default App