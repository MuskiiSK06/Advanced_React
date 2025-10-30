import axios from "axios"
import { useState } from "react"

export default function App() {

  const [data, setData] = useState([])

  const getData = async () =>{
    const {data} = await axios.get('https://picsum.photos/v2/list')  
    
    setData(data)
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>

      <div>
        {data.map( function(elem,idx){
          return <h3>Hello {elem.author} {idx+1}</h3>
        })}
      </div>
    </div>
  )
}
