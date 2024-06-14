// WalletComponent.js
 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { FaHandHoldingUsd } from "react-icons/fa";

const Wallet= () => {
  const [wallet, setWallet] = useState({ id: 123, balance: 100 });
  const [newBalance, setNewBalance] = useState('');

  useEffect(() => {
    // Fetch initial wallet data
    axios.get('/api/wallet')
      .then(res => {
        setWallet(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleUpdateBalance = () => {
    axios.put('/wallet', { balance: newBalance })
      .then(res => {
        setWallet({ ...wallet, balance: res.data.newBalance });
        setNewBalance('');
      })
      .catch(err => console.log(err));
  };

  return (
    <div id='b1' className='bg-gray-100 h-72 w-80 rounded-xl ml-[420px] mt-4'>

      <center>
        <h1 className='text-2xl'>Balance</h1>
        <p className='text-1xl'>PUT API</p>
      </center>
     
      <input
        type="number"
        placeholder='Add Balance'
        value={newBalance}
        onChange={e => setNewBalance(e.target.value)} className='text-2xl mt-4 ml-4 rounded-md'
      />
      <button onClick={handleUpdateBalance}className='text-2xl text-white bg-red-600 rounded-2xl px-2 py-1 ml-16 mt-4' >Update Balance</button>

   <center> <h1 className='mt-8 text-2xl text-red-600'>Wallet Data</h1></center>
     <div className='w-68 bg-green-300 text-2xl text-white rounded-md ml-4 mr-4 mt-4 flex justify-between'>
     {/* <FaHandHoldingUsd className='ml-4 mt-1' /> */}
     <p className='mr-160' >Balance</p>
     <h1 className='mr-6'>{wallet.balance}</h1></div>
    </div>
    
  );
};

export default Wallet;
