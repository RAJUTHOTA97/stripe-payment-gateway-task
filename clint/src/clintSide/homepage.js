import React from 'react';
import TransactionGrid from './transctionsGird';

function HomePage({ transactions }) {
  return (
    <div>
       
      <TransactionGrid transactions={transactions} />
    </div>
  );
}

export default HomePage;
