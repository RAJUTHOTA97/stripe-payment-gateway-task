 // Success.js
import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { httpsCallable } from "./firebase/functions";
import { functions } from './firebase';

function Success() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const storePaymentDetails = async () => {
      const sessionId = searchParams.get('session_id');

      const storeDetails = httpsCallable(functions, 'storePaymentDetails');
      const { data } = await storeDetails({ sessionId });
      console.log("Payment stored with ID: ", data.id);
    };

    storePaymentDetails();
  }, [searchParams]);

  return (
    <center>
      <h1>Payment Successful!</h1>
    </center>
  );
}

export default Success;
