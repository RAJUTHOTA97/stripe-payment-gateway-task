

import reactImg from "./profilepic.jpg"



const Cards=(props)=>{
    console.log(props)
    return(
        <>
     
  <div className="card" style={{width:"30%" }}>
    <img className="card-img-top" src={props.image} alt="Card image" style={{width:"10%"}}></img>
    <div className="card-body">
      <h4 className="card-title" style={{color:props.color}}>{props.name}</h4>
      <p className="card-text"  >{props.descrption}</p>
      <p className="card-text"></p>
      <a href="#" className="btn btn-primary">See Profile</a>
    </div>
  </div>
        </>
    )
}
export default Cards