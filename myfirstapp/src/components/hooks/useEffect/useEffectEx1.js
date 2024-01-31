import axios from "axios"
import { useEffect, useState } from "react"

const useEffectEx1=()=>{
const [productListing,setProductListing]=useState([])

useEffect(()=>{
    fetchdata()
    console.log("component mount")
},[])

const fetchdata=()=>{

axios.get("https://fakestoreapi.com/products")
.then(response=>{

    if(response.status===200){
        setProductListing(response.data)
    }
    
})

}
    return(
<>

<h2>useEffectsexample1</h2>


{
   
   productListing.map((val)=>{

   

    return (
        <>
         <p>{val.id}</p>
        <img src={val.image} width={100}/> 
       <h2>{val.title}</h2>
       <p>{val.description}</p>

        
        
        </>
    )
   })

}

</>
    )
}
export default useEffectEx1



// const productsListing =({data})=>{
//     return(
//         <>
//         <div>
//             <h3>{data.title}</h3>
//         </div>
//         </>
//     )
// }