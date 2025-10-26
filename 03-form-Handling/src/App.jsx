import React from 'react'

function App() {

  const submitHandler = (e) =>{
    e.preventDefault()
    console.log("Form is Submitted")
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type='text' placeholder='Enter your Name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App