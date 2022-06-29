import React from 'react';
import Member from './Member'

const Members = ({members, onDelete}) => {
    
    return(
        <div>
            {members.map((member, index) => (
                <Member key={index} member={member} onDelete={onDelete} />
                //<Member key={index} member={member} onDelete={onDelete} onToggle={onToggle} />
            ))}
        </div>
    )
}

export default Members;