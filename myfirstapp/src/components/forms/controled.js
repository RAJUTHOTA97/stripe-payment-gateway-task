// import { useState } from "react"

import { useState } from "react";





// const Controlled =()=>{
//    const [userName,setuserName]=useState("") 
//    const [userNameError,setuserNameError]=useState("")

//    const [password,setPassword]=useState("")
//    const [passwordError,setPasswordError]=useState("")
   
//    const [confirmPassword,setConfirmPassword]=useState("")
//    const [confirmPasswordError,setconfirmPasswordError]=useState("")
 

//    const userNameHandler=(event)=>{
//     console.log(event.target.value)
//     setuserName(event.target.value)

//     if(event.target.value.length>10){
//         setuserNameError("enter below 10char")
//     }
//     else{
//         setuserNameError("")
//     }

//    }
//    const passwordHandler=(event)=>{
//     setPassword(event.target.value)
//     console.log(event.target.value);
//     const result=validatePassword(event.target.value)
//     console.log(result)
//     if(result){
//       console.log("valid password")
//       setPasswordError("")

//     }else{
//       setPasswordError("inavlid password")
//     }

//    }
   

//    const username = "k3llydev";
// function validatePassword(psw)
// {
//  let msg = true

//  switch (true) {
//  case  (psw.length < 8 || psw.length > 13):
//    msg = false
//    break
//  case  (!(/[0-9]/.test(psw))):
//    msg = false
//    break
//  case (psw == psw.toLowerCase()) || (psw == psw.toUpperCase()):
//    msg = false
//    break
//  case ( psw.includes(username)):
//    msg =false
//    break
//  }
//  return msg
    
// }
//     const submitHandler=(event)=>{
//       event.preventDefault()
      
    
    

// const userDetails={

//     userName,
//     password
// }
// console.log(userDetails,"userDetails")

//     }


//     return(
//    <>
//    <form   >
//   <div className="form-group">
//     <label >Phone Number:</label>
//     <input type="text" className="form-control" id="email"  />
//     {
//         userNameError?
//         <h5 style={{color:"red"}}>{userNameError}</h5>
//         :
//         null
//     }
//   </div>
//   <div className="form-group">
//     <label >Password:</label>

// <input type="password" className="form-control" id="pwd"   />
// 
    
//   </div>
//    
 
    
//    
//    
 
//   <button type="submit" className="btn btn-default" style={{color:"white",backgroundColor:"green"}}>Submit</button>
// </form>
   
   
//    </>

//     )
// }


// export default Controlled






const Controlled =()=>{
  
const[input,setInput]=useState("")
const[inputError,setInputError]=useState("")


const[password,setPassword]=useState("")
const[passwordError,setPasswordError]=useState("")
const passInput=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/



const[cnfmpassword,setcnfmPassword]=useState("")
const[cnfmpasswordError,setcnfmPasswordError]=useState("")



const inputHandler=(event)=>{
 setInput(event.target.value)
 
 if(event.target.value.length>10){
  setInputError("enter below 10 numbers")
 }
 else{
  setInputError("")
 }

}
const passwordHandler=(event)=>{
  setPassword(event.target.value)
  
  if(event.target.value.match(passInput)){
    setPasswordError("")
   }
   else{
    setPasswordError("please enter correct passsword")
   }



}
const cnfmPasswordHandler=(event)=>{
  setcnfmPassword(event.target.value)
  if(password==event.target.value){
    setcnfmPasswordError("")

  }else{
    setcnfmPasswordError("password does not match")
  }

}

return(
  <>
  
  <form>
  <div className="form-group">
   <label >Phone Number:</label>
     <input type="text" className="form-control" id="email" value={input} onChange={ inputHandler} />
     {
setInputError?
<h6 style={{color:"red"}}>{inputError}</h6>:
null
}
     
   </div>
   <div className="form-group">
     <label >Password:</label>

 <input type="password" className="form-control" id="pwd" value={password} onChange={passwordHandler}  />
 {
 setPasswordError?
<h6 style={{color:"red"}}>{passwordError}</h6>:
null
}
    
    
   </div>
   <div className="form-group">
     <label > Confirm Password:</label>

 <input type="password" className="form-control" id="pwd" value={cnfmpassword} onChange={cnfmPasswordHandler}  />
 {
 cnfmpasswordError?
<h6 style={{color:"red"}}>{cnfmpasswordError}</h6>:
null
}
    
    
   </div>
   
 
  <button type="submit" className="btn btn-default" style={{color:"white",backgroundColor:"green"}}>Submit</button>

  
  
  </form>
  </>
)


}
export default Controlled ;