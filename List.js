import React from "react";
import { BiTrash } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";

const List = ({ people, removePerson, editPerson }) => {
  return (
    <div>
      {people.map((persons) => {
        const { id, name, birth } = persons;
        return (
          <article key={id} className="list-person">
            <h4 className="person-name">{name}</h4>
            <p>{birth}</p>
            <div className="btn-container">
              <button
                className="edit-btn"
                type="button"
                onClick={() => editPerson(id)}
              >
                <FaEdit />
              </button>

              <button
                className="delete-btn"
                type="button"
                onClick={() => removePerson(id)}
              >
                <BiTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
