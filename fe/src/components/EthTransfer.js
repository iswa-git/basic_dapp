import React, { useState } from 'react';

const EthTransfers = ({ From, To, OnTransfer }) => { 

        const [from, setFrom] = useState('');
        const [to, setTo] = useState('');
        const [amount, setAmount] = useState('');
        
        const transferdata = { from, to, amount}
        const onSubmit = (e) => {
            e.preventDefault();
            console.log(transferdata);
        
    
            if (!from){
                alert ('Please notice the FROM address !')
                return
            }

            if (from.length !== 42){
                alert ('Please notice the FROM address !')
                return
            }
        }
        return (
        <form className='add-form' onSubmit={OnTransfer}>
            <div className='form-control'>
                <label>From Address</label>
                <input type='text' placeholder='Add the FROM address' value={ from } />
            </div>
               
            <div className='form-control'>
                <label>To Address</label>
                <input type='text' placeholder='Add the To address' value={ to } />
            </div>

            <div className='form-control'>
                <label>Value</label>
                <input type='text' placeholder='Add the To address' value={ amount } />
            </div>
    
            <input type='submit' value='Send' className='btn btn-block' />
            
        </form>
    );
}
 
export default EthTransfers;