// 

import React from 'react';
import './stylee.css';  

function TransactionGrid({ transactions }) {
  return (
    <div>
      <h2>Transaction History</h2>
      {transactions.length > 0 ? (
        <div className="transaction-grid">
          {transactions.map((transaction, index) => (
            <div className="transaction-card" key={index}>
              <p className='textt'><strong>Name:</strong> {transaction.name}</p>
              <p className='textt'><strong>Amount:</strong> {transaction.amount}</p>
              <p className='textt'><strong>Date:</strong> {new Date(transaction.timestamp.toDate()).toLocaleString()}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No transactions found.</p>
      )}
    </div>
  );
}

export default TransactionGrid;
