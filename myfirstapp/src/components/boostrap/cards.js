

 import reactImg from "../myphoto.jpg"



const Cards=(props)=>{
    console.log(props)
    return(
        <>
     
  <div className="card" style={{width:"100%" }}>
    <img className="card-img-top" src={reactImg} alt="Card image" style={{width:"100%"}}></img>
    <div className="card-body">
      <h4 className="card-title" style={{color:props.color}}>{props.profile.name}</h4>
      <p className="card-text"  >{props.profile.designation}</p>
      <p className="card-text"></p>
      <a href="#" className="btn btn-primary">See Profile</a>
    </div>
  </div>
        </>
    )
}
export default Cards