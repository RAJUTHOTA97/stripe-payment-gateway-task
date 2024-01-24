import { useState } from "react"








const UseStateexample=()=>{

const[count,setCount]=useState(0)
  


const handleIncrement=()=>{

    setCount(count+1)
}


return(
        <>
        <h2>usestate  {count}</h2>
        <button  onClick={handleIncrement}>click to incriment</button>
        
        
        </>
    )
}


export default UseStateexample