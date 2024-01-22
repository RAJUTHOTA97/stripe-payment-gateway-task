
import Cards from "./cards"




const BoostapLayout=()=>{
   
    const members=[
        {
            name:"Raju",
            designation:"Ceo",
            color: "red",
            salary: "NP"
        },
        {
            name:"Ram",
            designation:"Founder",
            color: "yellow",
            salary: "20"
        },
        {
            name:"Rahem",
            designation:"Co-founder",
            color:"green",
            salary:"10"
        }
]

    return(
        <>
        <div className="container-fluid p-5 bg-primary text-white text-center">
  <h1>well come to my page</h1>
  <p>Resize this responsive page to see the effect!</p> 
</div>
  
<div className="container mt-5">
  <div className="row">
    <div className="col-sm-4">
       <Cards profile={members[0]}/>
    </div>
    <div className="col-sm-4">
       <Cards profile={members[1]}/>
    </div>
    <div className="col-sm-4"> 
    <Cards profile={members[2]}/>
    </div>
  </div>
</div>
        </>
    )
}
export default BoostapLayout