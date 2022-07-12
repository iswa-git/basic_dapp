import React from 'react';
import { useState, useEffect } from 'react';
//import logo from './logo.svg';
import './index.css';
//import Navbar from './components/Navbar';   
//import Home from './components/Home';
import Header from './components/Header';
import Members from './components/tm';
import AddMember from './components/AddMember'
import EthTransfer from './components/EthTransfer';

const jsondataurl = 'http://localhost:5000/team/';

const App = () => {
  const [ showAddMember, setShowAddMember] = useState (false)

  const [ showEthTransfer, setShowEthTransfer] = useState(false)
  
  const [ members, setMember ] = useState ([])
  
  const [from, setFrom ] = useState('')
  
  const [to, setTo ] = useState ('')

  const handleClickTransfer = (e) => {
    console.log (e)
  }

  useEffect (()=> {
    //onPlus
    const onPlusInAppjs = async (id) => {
      console.log('send ', id);
    }

    const getMembers = async () => {
      // eslint-disable-next-line 
      const membersFromServer = await fetchMembers()
      setMember(membersFromServer)
    }
    getMembers()
  }, [])

  // Fetch Members
  const fetchMembers = async () => {
    const res = await fetch('http://localhost:5000/team/')
    const data = await res.json()

    return data
  }

  // Add  Member
  const addMember = async (member) => {
    const res = await fetch('http://localhost:5000/team/', {
      method: 'POST',
      headers: {
        'Content-type':'application/json'
      },
      body: JSON.stringify(member)
    })

  const data = await res.json()
  setMember([...members, data])
}

// Delete Member
const deleteMember = async (id) => {
  const res = await fetch (`jsondataurl${id}`, {
    method: 'DELETE',
  })
  console.log(res)

   //We should control the response status to decide if we will change the state or not.
   res.status === 200
   ?  setMember (members.filter((member) => member.id !== id))
   : alert('Error Deleting This Record')
}
    return (
      <div className="container">
        <Header onAdd={() => setShowAddMember(!showAddMember)} showAdd={showAddMember} title="Dev Team" />
        {showAddMember && <AddMember onAdd={addMember}/>}
        {members.length > 0 ? (
          <Members members={members} onDelete={deleteMember} onPlus={onPlusInAppjs} />
        ) : ( 'Nothing to show')} 
        <EthTransfer onTransfer={() => handleClickTransfer (!showEthTransfer)}  />
      </div>
    );
};

export default App;