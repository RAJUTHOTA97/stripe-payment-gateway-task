import React, { useState } from "react"







const UseStateExample3 =()=>{
    const initialValue=["orange","apple"]

const[list,setList]=useState(initialValue)
const handleAddFruit=()=>{
    const newFruit="banana"
    setList([...list,newFruit])

}

    return(
        <>
        <h2>hello</h2>
        <button onClick={handleAddFruit}>click to add fruit</button>
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