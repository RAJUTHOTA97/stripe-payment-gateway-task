import React, { useState } from "react"







const UseStateExample3 =()=>{
    const initialValue=[false,false]

const[list,setList]=useState(initialValue)
const[circle,setCircles]=useState(initialValue)
const handleAddFruit=()=>{
    const newFruit=true
    setList([...list,newFruit])

}
const handleCircle=()=>{
    const cirC=true
setCircles([...circle,setCircles])
}

    return(
        <>
        <h2>hello</h2>
        <button onClick={handleAddFruit}>click to add fruit</button>
        <h2 style={{border:'2px solid black',borderRadius:'50%', width:'100px',height:'100px'}} onClick={handleCircle}></h2>
        <ol>
     {list.map(
        (value,index)=><React.Fragment key={index}>
        
        
        <li>{value}</li>
        
        </React.Fragment>
     )}
     </ol>
      
        
        </>
    )
}


export default UseStateExample3