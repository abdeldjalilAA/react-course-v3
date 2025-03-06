import React, { useEffect, useState } from "react";
import { data } from "../../../data";

const defaultState = {
  people: data,
};
const reducer = (state, action) => {
  if (action.type === "Clear") {
    return { ...state, people: [] };
  }
  if (action.type === "set") {
    return { ...state, people: data };
  }
  if (action.type === "remove") {
    let newPeople = state.people.filter(
      (person) => person.id !== action.payload.id
    );
    return { ...state, people: newPeople };
  }

  throw new Error(`Action is more than "${state}---${action}"`);
};

const ReducerBasics = () => {
  const [state, dispatch] = React.useReducer(reducer, defaultState);

  const Setusers = () => {
    dispatch({ type: "set" });
  };
  const removeItem = (id) => {
    dispatch({ type: "remove", payload: { id } });
  };
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length < 1 ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={Setusers}
        >
          reset
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={() => dispatch({ type: "Clear" })}
        >
          clear items
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
