import React, { useState } from 'react';
import data from './data';
import formDefault from './formDefault'
import { FaEdit } from 'react-icons/fa';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Add from './Add';
import List from './List';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const idGen = () => { return new Date().getTime().toString() };


function App() {
 const [people, setPeople] = useState(data);
 const [person, setPerson] = useState({ ...formDefault });
 const [editID, setEditID] = useState(null);
 const [isEditting, setIsEditting] = useState(false);
 const [showAdd, setShowAdd] = useState(true);


 const handleChange = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  setPerson({ ...person, id: idGen(), [name]: value });
 }
 const handleSubmit = (e) => {
  e.preventDefault();

  if (person.name && isEditting) {
   setPeople(people.map((item) => {
    if (item.id === editID) {
     return { ...item, ...person }
    }
    return item;
   }))
   setPerson({ ...formDefault })
   setEditID(null);
   setIsEditting(false);
  } else {
   setPeople([...people, person]);
   setPerson({ ...formDefault })
  }
 }

 const removePerson = (id) => {
  const newPeople = people.filter((person) => person.id !== id);
  setPeople(newPeople);
 }
 const editPerson = (id) => {
  const edited = people.find((item) => item.id === id);
  setIsEditting(true);
  setEditID(id);
  setPerson(edited);
  setShowAdd(true);

 }

 return (
  <main className='container'>
   <h1>Foxtrot Project <span><FaEdit /></span></h1>

   <div className="add">
    <h3>Adicionar Novo</h3>
    <Button className='add-btn' onClick={() => setShowAdd(!showAdd)} >
     {
      showAdd === false ?
       <AiOutlinePlus /> :
       <AiOutlineMinus />
     }
    </Button>

    {showAdd && <Add
     person={person}
     handleChange={handleChange}
     handleSubmit={handleSubmit} />}
   </div>



   <List
    people={people}
    removePerson={removePerson}
    editPerson={editPerson} />
  </main>
 );
}

export default App;
