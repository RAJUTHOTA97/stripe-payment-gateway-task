 

import React from 'react';
import "./stylee.css";

const TransactionGrid = ({ transactions }) => {
  return (
    <div className="transaction-grid">
      <h1 className='head1'>TransactionHistory</h1>
      <table> 
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.timestamp} className="transaction-item">
              <td>{transaction.name}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionGrid;

