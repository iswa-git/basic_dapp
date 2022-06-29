import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <div className="navbar">
            <h1>Single Application Page (SAP)</h1>
            <button><a href="/" className='btn'>Home</a></button>
            <button><a href="/create" className='btn' style={{
                color: "white",
                backgroundColor: '#f1356d', 
                borderRadius: '8px'
               }}>New</a></button>
            </div>
         </nav>
      );
}
 
export default Navbar;
