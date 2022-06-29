import React from 'react';
import { useState } from 'react';
//import logo from './logo.svg';
import './index.css';
//import Navbar from './components/Navbar';   
//import Home from './components/Home';
import Header from './components/Header';
import Members from './components/tm';
import AddMember from './components/AddMember'

const App = () => {
  const [ showAddMember, setShowAddMember] = useState (false)
  
  const [ members, setMember ] = useState ([
    {
        "id": 1,
        "title": "Developer",
        "name": "Haytham",
        "netad": ""
      },
      {
        "id": 2,
        "title": "Developer",
        "name": "Taha",
        "netad": ""
      },
      {
        "id": 3,
        "title":"Developer",
        "name":"Hesham",
        "netad": ""
      },
      {
        "id": 4,
        "title":"Developer",
        "name":"Ahmad",
        "netad": ""
      },
      {
        "id": 5,
        "title":"Developer",
        "name":"Omar",
        "netad": ""
      },
      {
        "id": 6,
        "title":"Developer",
        "name":"Etaf",
        "netad": ""
      },
      {
        "id": 7,
        "title":"Developer",
        "name":"Mohammad Ali",
        "netad": ""
      },
      {
        "id": 8,
        "title":"Developer",
        "name":"Mohammad",
        "netad": "0x0A80816cde5C23a7f7e5C6a7B385A1B239C946C2"
      },
      {
        "id": 9,
        "title":"Manager",
        "name":"Raghid",
        "netad": ""
      },
      {
        "id": 10,
        "title":"Manager",
        "name":"Devin",
        "netad": ""
      }
])
// Add  Member
const addMember = (member) => {
  const id= Math.floor(Math.random() * 10000 )+ 1
  const newMember = {id, ...member}
  
  setMember([...members, newMember])
}
// Delete Member
const deleteMember = (id) => {
  setMember (members.filter((member) => member.id !== id))
}
    return (
      <div className="container">
        <Header onAdd={() => setShowAddMember(!showAddMember)} showAdd={showAddMember} title="Dev Team" />
        {showAddMember && <AddMember onAdd={addMember}/>}
        {members.length > 0 ? (
          <Members members={members} onDelete={deleteMember}/>
        ) : ( 'No Members')}
      </div>
    );
};

export default App;