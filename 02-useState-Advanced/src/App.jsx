import React, { useState } from 'react'

function App() {

  const [num, setNum] = useState({user:"Muskan", age:22})

  // Method 1 to update the value of setNum
  const changeNum = () =>{
    const newNum = {...num}
    newNum.user = "Tina"
    newNum.age = 30
    setNum(newNum)
  }
  
  // Method 2 to update the value of setNum
  const btnClicked = () =>{
    setNum(prev => ({...prev,user:"Tina",age:30}))
  } 

  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={btnClicked}>Click Here</button>
    </div>
  )
}

export default App