import { useState } from 'react'

function App() {

    const [title, setTitle] = useState("")
    const [details, setDetails] = useState("")
    const [task, setTask] = useState([])

    const submitHandler = (e) =>{
        e.preventDefault()
        
        const copyTask = [...task]
        copyTask.push({title,details})
        setTask(copyTask)

        setTitle('')
        setDetails('')

    }
    
    // DELETE TASK FUNCTION
    const deleteTask = (idx) =>{
        const copyTask = [...task]
        copyTask.splice(idx,1)
        setTask(copyTask)
    }
    
  return (
      <div className='min-h-screen w-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500'>
        <h1 className='text-center text-3xl uppercase text-black'>Notes App</h1>

        {/* FORM CONTAINER */}
            <form onSubmit={(e)=>{
                submitHandler(e)
            }} 
            className='flex items-center flex-col'>

            {/* INPUT FIELD */}
                <input className='bg-transparent text-gray-100 border-2 border-white w-2/3 p-4 text-[1rem] mt-10 rounded-3xl outline-none' 
                type='text' placeholder='Enter your Task'
                value={title}
                onChange={(e)=>{
                    setTitle(e.target.value)
                }}
                />

            {/* TEXTAREA FIELD  */}
                <textarea className='bg-transparent text-gray-100 border-2 border-white w-2/3 h-40 p-2 mt-5 rounded-3xl resize-none outline-none' placeholder='Write your Task details....'
                value={details}
                onChange={(e)=>{
                    setDetails(e.target.value)
                }} > 
                </textarea>

            {/* BUTTON TO ADD TASK */}
                <button className='bg-red-500 w-2/3 p-4 mt-5 rounded-4xl text-white text-[1.1rem] cursor-pointer active:scale-95'>ADD TASK</button>
            </form>

            {/* CARD CONTAINER DIV SECTION */}
            <div className='w-full py-8 text-black'>

            {/* H1 TAG */}
              <h1 className='text-black uppercase px-25 text-[1.5rem]'>Recent Notes</h1>

                {/* CARD */}
                    <div className='flex gap-5 flex-wrap justify-start px-22'>
                    {task.map(function(elem,idx){
                        return <div key={idx} className='relative h-80 w-90 mt-2 rounded-2xl px-10 py-20 leading-4.5 bg-[url("https://static.vecteezy.com/system/resources/previews/010/793/873/non_2x/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png")] bg-cover'>

                    {/* DELETE BUTTON ICON */}
                        <button onClick={(idx)=>{
                            deleteTask(idx)
                        }}
                        key={idx} className='absolute top-12 right-12 text-[0.9rem] cursor-pointer bg-black rounded-full p-2 active:scale-95'>🗑️</button>

                        {/* TASK HEADING */}
                            <h1 className='text-2xl font-semibold leading-6 mt-1 text-black'>{elem.title}</h1>

                        {/* TASK DETAILS */}
                            <p className='text-gray-600 font-normal leading-5.5'>{elem.details}</p>
                        </div> 
                    })}
                    </div>    
            </div>
      </div>
  )
}

export default App