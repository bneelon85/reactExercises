import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Welcome(props) {
  return <h1>Hello {props.name}</h1>;
}

function DrinkList(props) {
  const people = props.people;
  const listItems = people.map((id) =>
  <li key={id.toString()}>
  {id.name} is {id.age} and {id.age >= 21 ? 'can drink at Moontower!' : 'cannot drink at Moontower...'}
  </li>
);
 return (
  <ul>{listItems}</ul>
 );
}

const people = [
  {id: 1, name: 'Joey', age: 22},
  {id: 2, name: 'Johnny', age: 20},
  {id: 3, name: 'Josh', age: 21}
]

function App() {
  return (
    <div>
      <Welcome name="Jimmy" />
      <DrinkList people={people} />
    </div>
  );
}

export default App;
