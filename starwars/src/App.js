import React, { useState, useEffect } from 'react';
import axios from "axios";
import Character from "./components/Character.js";
import GlobalFonts from "./fonts/fonts.js";
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [ characters, setCharacters ] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get("https://swapi.dev/api/people/")
    .then(response => {
      setCharacters(response.data.results);
    })
    .catch(error => {
      console.log(error);
    })
  },[]);

  return (
    <div className="App">
      <GlobalFonts />
      <h1 className="Header">STAR WARS</h1>
      {
        characters.map(character => {
          return <Character key={character.name} character={character} />
        })
      }
    </div>
  );
}

export default App;
