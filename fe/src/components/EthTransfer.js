import React from "react";
import { useState } from 'react';

const EthTransfers = ({ onTransfer }) => {

        const [from, to ] = useState('');
        
        const onSubmit = (e) => {
            e.preventDefault()
    
            if (!from){
                alert ('Please the FROM address !')
                return
            }

            if (from.length !== 42){
                alert ('Please the FROM address !')
                return
            }
    
            if (netad.length >0 ){
                if (netad.length !== 42){
                    alert ('Token length should be 42, please check it!')
                    return
                }
            }
    
            onAdd( {name, title, email, netad })
    
            setName('')
            setTitle('')
            setNetAd('')
            setEmail('')
        }
    
        
        return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Member's Name</label>
                <input type='text' placeholder='Add the Name of the Member' value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
    
    
            {/* <div className='form-control'>
                <label>Title</label>
                <input type='text' placeholder='Add Title' value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
    
            <div className='form-control'>
                <label>Email Address</label>
                <input type='text' placeholder='Add Email Address' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div> */}
    
            <div className='form-control'>
                <label>Token Address</label>
                <input type='text' placeholder='Add Token Address' value={netad} onChange={(e) => setNetAd(e.target.value)}/>
            </div>
    
            <input type='submit' value='Save Member' className='btn btn-block' />
            
        </form>
    );
}
 
export default EthTransfers;