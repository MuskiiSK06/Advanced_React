import React, { useState } from 'react'

function App() {

  const [num, setNum] = useState(0)

  function increaseNum(){
    setNum(num+1)
  }
  function decreaseNum(){
    setNum(num-1)
  }
  function increase5(){
    setNum(num+5)
  }
  function zero(){
    setNum(0)
  }
  
  return (
    <div className='h-screen w-full bg-gray-600 flex justify-center items-center flex-col'>

      <div className='h-50 w-80 bg-black text-white flex justify-center items-center text-[3rem] rounded-2xl'>{num}</div>

        <div className='mt-5 grid grid-cols-2 gap-2 text-[1.2rem]'>
            <button onClick={increaseNum} className='bg-blue-200 text-center w-60 h-15 cursor-pointer rounded-2xl'>Increase</button>
            <button onClick={decreaseNum} className='bg-blue-200 text-center w-60 h-15 cursor-pointer rounded-2xl'>Decrease</button>
            <button onClick={increase5} className='bg-blue-200 text-center w-60 h-15 cursor-pointer rounded-2xl'>Increase by 5</button>
            <button onClick={zero} className='bg-blue-200 text-center w-60 h-15 cursor-pointer rounded-2xl'>0</button>
        </div>    
    </div>
  )
}

export default App