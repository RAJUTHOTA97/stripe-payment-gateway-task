import { useRef, useState } from "react"







const Uncontroled=()=>{
    const emailRef=useRef()
    const passwordRef=useRef()
    const[error,setError]=useState("")

const handleSubmit=(event)=>{
        event.preventDefault()
        
        console.log(emailRef.current.value);
        
        console.log(passwordRef.current.value);

        if(passwordRef.current.value.length<3){
          alert("enter more than 3 letters")
        }
        else{
          const userInfo={
            username:emailRef.current.value,
            password:passwordRef.current.value
          }
          hitServer(userInfo)

        }

    }
const hitServer=(data)=>{
  
fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify( data)
})
.then(res => res.json())
.then(res=>{
if(res.message){
   
  setError(res.message)

}else{
  alert("sucessfulllllllllllllllll")
  setError("")
}


})
.catch(err=>console.log(err))
}


return(
<>
<form  onSubmit={handleSubmit}>
  <div className="form-group">
    <label >Email address:</label>
    <input type="text" className="form-control" id="email"  ref={emailRef}/>
  </div>
  <div className="form-group">
    <label >Password:</label>{
error?
<input type="password" className="form-control" id="pwd"   ref={passwordRef}  style={{borderColor:"red" }}/>
:
<input type="password" className="form-control" id="pwd"   ref={passwordRef} />


    }
    
  </div>
  <div className="checkbox">
    <label><input type="checkbox"/> Remember me</label>
  </div>
  {
    error ? 
    <h5 style={{color:"red"}}>{error}</h5>
    :
    null
  }
  <button type="submit" className="btn btn-default" style={{color:"white",backgroundColor:"green"}}>Submit</button>
</form>

</>


)

}

export default Uncontroled

 