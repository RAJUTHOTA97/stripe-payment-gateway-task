import { useState } from "react"





const Controlled =()=>{
   const [userName,setuserName]=useState("") 
   const [userNameError,setuserNameError]=useState("")

   const [password,setPassword]=useState("")
   const [passwordError,setPasswordError]=useState("")
 

   const userNameHandler=(event)=>{
    console.log(event.target.value)
    setuserName(event.target.value)

    if(event.target.value.length>10){
        setuserNameError("enter below 10char")
    }
    else{
        setuserNameError("")
    }

   }
   const passwordHandler=(event)=>{
    setPassword(event.target.value)
    console.log(event.target.value);
    const result=validatePassword(event.target.value)
    console.log(result)
    if(result){
      console.log("valid password")
      setPasswordError("")

    }else{
      setPasswordError("inavlid password")
    }

   }
   

   const username = "k3llydev";
function validatePassword(psw)
{
 let msg = true

 switch (true) {
 case  (psw.length < 8 || psw.length > 13):
   msg = false
   break
 case  (!(/[0-9]/.test(psw))):
   msg = false
   break
 case (psw == psw.toLowerCase()) || (psw == psw.toUpperCase()):
   msg = false
   break
 case ( psw.includes(username)):
   msg =false
   break
 }
 return msg
    
}
    const submitHandler=(event)=>{
      event.preventDefault()

const userDetails={

    userName,
    password
}
console.log(userDetails,"userDetails")

    }


    return(
   <>
   <form  onSubmit={submitHandler} >
  <div className="form-group">
    <label >Phone Number:</label>
    <input type="text" className="form-control" id="email" value={userName} onChange={userNameHandler}  />
    {
        userNameError?
        <h5 style={{color:"red"}}>{userNameError}</h5>
        :
        null
    }
  </div>
  <div className="form-group">
    <label >Password:</label>

<input type="password" className="form-control" id="pwd" value={password} onChange={passwordHandler}   />
{
  passwordError?
  <h3>{passwordError}</h3>
  :
  null
}
 
    
  </div>
  <div className="checkbox">
    <label><input type="checkbox"/> Remember me</label>
  </div>
 
  <button type="submit" className="btn btn-default" style={{color:"white",backgroundColor:"green"}}>Submit</button>
</form>
   
   
   </>

    )
}


export default Controlled