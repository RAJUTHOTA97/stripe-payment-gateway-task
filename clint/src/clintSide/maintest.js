import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from './firebase.js';
import './stylee.css';
import HomePage from './homepage.js';
 

function Main_test() {
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
    const stripe = await loadStripe("pk_test_51PJTcZSIvmbJGQ43y3e2cHcwsB50gqG8ThyEHdKVOmqiJ74SoLN9bWekJGFfkzIjSTFpaatt6SsKUAbSgqqfNsvf00xPPo493y");

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
    
    const body = {
      product: data
    };
    const headers = {
      "Content-Type": "application/json"
    };
    const response = await fetch("https://stripe-payment-gateway-backend.onrender.com/api/create-checkout-session", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body)
    });
    const session = await response.json();
    
    const result = stripe.redirectToCheckout({
      sessionId: session.id
    });
    
    if (result.error) {
      console.log(result.error);
    }
  };

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light "  >
        <div className="container-fluid">
          <a className="navbar-brand">Lets Pay</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/transactions">Transaction History</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<div className='main'>
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
           
        </div>} />
        <Route path="/transactions" element={<HomePage transactions={transactions} />} />
      </Routes>
    </Router>
  );
}

export default Main_test;
