// import React, { useState } from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// import { collection, addDoc } from "firebase/firestore";
// import { db } from './firebase.js';
// import "./stylee.css"

// function Main() {
//   const [data,setData]=useState({
//     Name:"",
//     Amount:""
  
//   })
//   const nameFunction=(e)=>{
//     setData({...data,Name:e.target.value})
//   }
//   const amountFunction=(e)=>{
//     setData({...data,Amount:e.target.value})
//   }

//   const makePayment=async(event)=>{
//     event.preventDefault();

//     const stripe=await loadStripe ("pk_test_51PJTcZSIvmbJGQ43y3e2cHcwsB50gqG8ThyEHdKVOmqiJ74SoLN9bWekJGFfkzIjSTFpaatt6SsKUAbSgqqfNsvf00xPPo493y")



//     // Store data in Firebase Firestore
//     try {
//       const docRef = await addDoc(collection(db, "payments"), {
//         name: data.Name,
//         amount: data.Amount, 
//         timestamp: new Date()
       
//       });
//       console.log("Document written with ID: ", docRef.id);
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }
//        const body={
//         product:data
//        }
//        const headers={
//         "Content-Type":"application/json"
//        }
//        const response=await fetch("http://localhost:7000/api/create-checkout-session",{
//         method:"POST",
//         headers:headers,
//         body:JSON.stringify(body)
//        })
// const session=await response.json();

// const result= stripe.redirectToCheckout({
//   sessionId:session.id

// })
// if(result.error){
//   console.log(result.error)
// }

//   }



//   return (
//     <center>
//       <h1>Payment</h1>
//     <form onSubmit={makePayment} className='form'>
//    <label>Name</label><br/>
//    <input type='text' onChange={nameFunction}/><br/>
//    <label>Amount</label><br/>
//    <input type='number' onChange={amountFunction}/><br/><br/>
//    <button type="submit ">Checkout</button>

//       </form>
      
//       </center>
  
//   )
// }

// export default Main;




import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { collection, addDoc, getDocs } from 'firebase/firestore'; // Import getDocs for retrieving transaction data
import { db } from './firebase.js';
import './stylee.css';
import TransactionGrid from './transctionhistory.js'; // Import the TransactionGrid component

function Main() {
  const [data, setData] = useState({
    Name: '',
    Amount: '',
  });
  const [transactions, setTransactions] = useState([]); // State for storing transaction data

  useEffect(() => {
    // Fetch transaction data from Firestore when component mounts
    const fetchTransactions = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'payments'));
        const transactionData = querySnapshot.docs.map((doc) => doc.data());
        setTransactions(transactionData);
      } catch (error) {
        console.error('Error fetching transaction data:', error);
      }
    };

    fetchTransactions();
  }, []); // Empty dependency array ensures this effect runs only once

  const nameFunction = (e) => {
    setData({ ...data, Name: e.target.value });
  };
  const amountFunction = (e) => {
    setData({ ...data, Amount: e.target.value });
  };

  const makePayment = async (event) => {
    event.preventDefault();
    const stripe=await loadStripe ("pk_test_51PJTcZSIvmbJGQ43y3e2cHcwsB50gqG8ThyEHdKVOmqiJ74SoLN9bWekJGFfkzIjSTFpaatt6SsKUAbSgqqfNsvf00xPPo493y")



    // Rest of your existing makePayment logic...

     
    try {
      const docRef = await addDoc(collection(db, 'payments'), {
        name: data.Name,
        amount: data.Amount,
        timestamp: new Date(),
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
    const body={
              product:data
             }
             const headers={
              "Content-Type":"application/json"
             }
             const response=await fetch("https://stripe-payment-gateway-backend.onrender.com/api/create-checkout-session",{
              method:"POST",
              headers:headers,
              body:JSON.stringify(body)
             })
      const session=await response.json();
      
      const result= stripe.redirectToCheckout({
        sessionId:session.id
      
      })
      if(result.error){
        console.log(result.error)
      }
      
  };

  return (
    <center>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand"  >Payment Page</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
       
         
       
      </ul>
    </div>
  </div>
</nav>
      <div className='main'>

      <div className='sub1'>
      <h1 className='head'>Payment</h1>
      <form onSubmit={makePayment} className="form">
        <label>Name</label>
        <br />
        <input type="text" onChange={nameFunction} />
        <br />
        <label>Amount</label>
        <br />
        <input type="number" onChange={amountFunction} />
        <br />
        <br />
        <button type="submit">Make payment</button>
      </form>
        </div> 
        <div className='sub2'>  <TransactionGrid transactions={transactions} /></div> 
      </div>
      

 
    
    </center>
  );
}

export default Main;




 

   

   
