import React from 'react';
import { BiTrash } from 'react-icons/bi';
import { FaEdit } from 'react-icons/fa';



const List = ({ people, removePerson, editPerson }) => {


 return (
  <>
   {people.map((persons) => {
    const { id, name, birth } = persons;
    return <article
     key={id}
     className="person">

     <div>
      <h4>{name}</h4>
      <p>{birth}</p>
     </div>
     <div className='btn-container'>
      <button className='btn' type='button'
       onClick={() => editPerson(id)} >
       <FaEdit />
      </button>

      <button className='btn' onClick={() => removePerson(id)}>
       <BiTrash />
      </button>
     </div>
    </article>
   })}
  </>
 );
};

export default List;
