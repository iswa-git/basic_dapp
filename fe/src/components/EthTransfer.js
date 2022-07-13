import React, { useState } from 'react';

const EthTransfer = ({ From, To, Amount, OnTransfer, onChangeAmount }) => { 

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
                <input id='from' type='text' placeholder='Add the FROM address' value={ From } />
            </div>
               
            <div className='form-control'>
                <label>To Address</label>
                <input id='to' type='text' placeholder='Add the To address' value={ To } />
            </div>

            <div className='form-control'>
                <label>Value</label>
                <input id='amount' type='number' placeholder='Add the Amount to be transfered' value={ Amount } onChange={onChangeAmount} />
            </div>
    
            <input type='submit' value='Send' className='btn btn-block' />
            
        </form>
    );
}
 
export default EthTransfer;