import React from 'react';
import Button from 'react-bootstrap/Button';
import formDefault from './formDefault';


function Add({ person, handleChange, handleSubmit }) {

 const fields = Object.keys(formDefault);

 return (
  <section>
   <div className="form">
    <div class='title'></div>
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
     {
      fields.map((item, index) => {

       return item !== 'id' && (
        <div key={index}>
         <label htmlFor={item}>{item}</label>
         <input
          type={item === 'birth' || item === 'date' ? 'date' : 'text'}
          id={item}
          name={item}
          value={person[item]}
          onChange={(e) => handleChange(e)}
          placeholder={`enter ${item}`}
         />
        </div>
       );
      })
     }

     <Button variant='primary' type="submit" onSubmit={(e) => handleSubmit(e)}>
      Submit
  </Button>
    </form >
   </div>
  </section>
 );
}

export default Add;
