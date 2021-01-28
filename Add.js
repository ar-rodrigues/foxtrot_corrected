import React from 'react';
import formDefault from './formDefault';


function Add({ person, handleChange, handleSubmit }) {

 const fields = Object.keys(formDefault);

 return (
  <article className='form-section form-small'>
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
     {
      fields.map((item, index) => {

       return item !== 'id' && (
        <div key={index} className='form-control'>
         <label htmlFor={item}>{item}</label>
         <input
          type={item === 'birth' || item === 'date' ? 'date' : 'text'}
          id={item}
          name={item}
          value={person[item]}
          onChange={(e) => handleChange(e)}
          placeholder={`enter ${item}`}
          className='form-input'
         />
        </div>
       );
      })
     }

     <button className='submit-btn' type="submit" onSubmit={(e) => handleSubmit(e)}>
      Submit
  </button>
    </form >

  </article>
 );
}

export default Add;
