import React from 'react';

import { FaTimes } from 'react-icons/fa'

const Member = ({member, onDelete}) => {
    let tokenaddress=member.netad ? member.netad : "Missing token address"
    let emailaddress=member.email ? member.email : "No email provided"
    return ( 
        <div className={`member ${member.active && 'active'}`}
        //onDoubleCllick={() => onToggle(member.id)}
        >
          <h3>
            {member.name}{' '}
            <FaTimes
              style={{ color: 'red', cursor: 'pointer' }}
              onClick={() => onDelete(member.id)}
            />
          </h3>
          <p>{member.title}</p>
          <p>{tokenaddress}</p>
          <p>{emailaddress}</p>
        </div>
      )
    }
    
    export default Member;