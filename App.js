import React, { useState } from "react";
import data from "./data";
import formDefault from "./formDefault";
import { FaEdit } from "react-icons/fa";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Add from "./Add";
import List from "./List";
import "bootstrap/dist/css/bootstrap.min.css";

const idGen = () => {
  return new Date().getTime().toString();
};

function App() {
  const [people, setPeople] = useState(data);
  const [person, setPerson] = useState({ ...formDefault });
  const [editID, setEditID] = useState(null);
  const [isEditting, setIsEditting] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showClient, setShowClient] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, id: idGen(), [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (person.name && isEditting) {
      setPeople(
        people.map((item) => {
          if (item.id === editID) {
            return { ...item, ...person };
          }
          return item;
        })
      );
      setPerson({ ...formDefault });
      setEditID(null);
      setIsEditting(false);
    } else {
      setPeople([...people, person]);
      setPerson({ ...formDefault });
    }
  };

  const removePerson = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  const editPerson = (id) => {
    const edited = people.find((item) => item.id === id);
    setIsEditting(true);
    setEditID(id);
    setPerson(edited);
    setShowAdd(true);
  };

  return (
    <main>
      <div className="container">
        <section className="add-section">
          <h3>
            Foxtrot Project{" "}
            <span>
              <FaEdit />
            </span>
          </h3>

          <header>
            <h4>Adicionar Novo</h4>
            <button className="btn" onClick={() => setShowAdd(!showAdd)}>
              {showAdd === false ? <AiOutlinePlus /> : <AiOutlineMinus />}
            </button>
          </header>
          {showAdd && (
            <Add
              person={person}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          )}
        </section>

        <section className="list-container">
          <List
            people={people}
            removePerson={removePerson}
            editPerson={editPerson}
            showClient={showClient}
            setShowClient={setShowClient}
          />
        </section>
      </div>
    </main>
  );
}

export default App;
