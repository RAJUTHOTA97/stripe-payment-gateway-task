import { Component } from "react";
import Loader from "../../Loders/loder";
import Cards from "../../boostrap/cards";










class Mounting extends Component{

constructor(){

    super()
    this.state={
        // message: "good afternoon",
        posts:[]
    }
}
componentDidMount(){
 

fetch("https://fakestoreapi.com/products")

.then(Response=>Response.json())
.then(Response=>{

    this.setState(
        {
            posts:Response
        })
})

}
    render(){
        return(

<>
{/* 
<h2>Mounting {this.state.message}</h2> */}
{
    this.state.posts.length>0 
    
    ?
    <> 
    
    {

    this.state.posts.map((eachPost)=>(
 
<div style={{display:"grid",gridTemplateColumns:"auto auto auto"}}>
 <Cards  name={eachPost.title} image={eachPost.image} descrption={eachPost.description}/>
</div>

        


    ))
    
}
    </>
    :
    <Loader></Loader>
     
   
}

</>


        )
    }

}
export default Mounting