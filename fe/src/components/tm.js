import React from 'react';
import Member from './Member'

const Members = ({members, onDelete, onPlus}) => {
    
    return(
        <div>
            {members.map((member, index) => (
                <Member key={index} member={member} onDelete={onDelete} onPlus={onPlus}/>
                //<Member key={index} member={member} onDelete={onDelete} onToggle={onToggle} />
            ))}
        </div>
    )
}

export default Members;