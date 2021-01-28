import React from 'react';
//import formDefault from './formDefault';


function Client({people}) {
  //const fields = Object.keys(formDefault);
  
  return (
    <>
    {
      people.map((person) => {
        const { 
          id,name,
          birth,profession,
          phone,goal,
          qp,hda,
          hs,psychology,
          medication,pain,
          palpation,tests,
          symptoms,date } = person;
        return (
          <article key={id} className="client">
            <h5>name</h5>
            <p>{name}</p>

            <h5>birth</h5>
            <p>{birth}</p>

            <h5>profession</h5>
            <p>{profession}</p>

            <h5>phone</h5>
            <p>{phone}</p>

            <h5>goal</h5>
            <p>{goal}</p>

            <h5>qp</h5>
            <p>{qp}</p>

            <h5>hda</h5>
            <p>{hda}</p>

            <h5>hs</h5>
            <p>{hs}</p>

            <h5>psychology</h5>
            <p>{psychology}</p>

            <h5>medication</h5>
            <p>{medication}</p>

            <h5>pain</h5>
            <p>{pain}</p>

            <h5>palpation</h5>
            <p>{palpation}</p>

            <h5>tests</h5>
            <p>{tests}</p>

            <h5>symptoms</h5>
            <p>{symptoms}</p>

            <h5>date</h5>    
            <p>{date}</p>
          </article>
        );
      })
    }
    </>
  );
}

export default Client;

