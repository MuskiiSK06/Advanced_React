import React, { useEffect, useState } from 'react'
import Card from './components/Card'
import axios from "axios"

function App() {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=20`)
    setUserData(response.data)
  } 

  useEffect(() => {
    getData()
  }, [index])
  

  let printUserData = <h3 className='text-xl text-gray-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>loading...</h3>

  if(userData.length>0){
    printUserData = userData.map(function(elem,idx){
      return <div key={idx}>
           <Card elem={elem} />
      </div>
    })
  }

  return (
    <div className='h-screen overflow-auto p-4'>
      {/* <button
       onClick={getData} 
       className='bg-green-500 text-white px-4 py-2 m-4 text-[2rem] rounded active:scale-90 cursor-pointer'>Get Data</button> */}

       <div className='px-4 py-4 text-[2rem] h-100% flex flex-wrap justify-center gap-4 mb-20'>
          {printUserData}
       </div>

       <div className='absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center gap-5'>
        <button
         style={{opacity: index == 1 ? 0.5 : 1}}
         onClick={()=>{
          if(index>1){
            setIndex(index-1)
            setUserData([])
          }
         }}
         className='bg-amber-300 text-black text-lg px-6 py-2 rounded active:scale-95 cursor-pointer'>Prev</button>

        <h4>Page {index}</h4>

        <button
         onClick={()=>{
          setUserData([])
          setIndex(index+1)
         }}
         className='bg-amber-300 text-black text-lg px-6 py-2 rounded active:scale-95 cursor-pointer'>Next</button>
       </div>
    </div>
  )
}

export default App