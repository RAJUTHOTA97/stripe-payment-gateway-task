import { useRef } from "react"







const Uncontroled=()=>{
    const emailRef=useRef()
    const passwordRef=useRef()

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
.then(res=>console.log(res))
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
    <label >Password:</label>
    <input type="password" className="form-control" id="pwd"   ref={passwordRef} />
  </div>
  <div className="checkbox">
    <label><input type="checkbox"/> Remember me</label>
  </div>
  <button type="submit" className="btn btn-default">Submit</button>
</form>

</>


)

}

export default Uncontroled