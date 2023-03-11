
import './App.css';
import Form from './Form';
import React, { useState } from 'react';

export const ThemeContext = React.createContext();

function App() {

  const [theme, setTheme] = useState("light");
  console.log(theme)
  function handleToggle() {
    setTheme((current => theme === "light" ? "dark" : "light"));
  }
  return (
    <ThemeContext.Provider value={theme}>
    <div className={`App ${theme === "light" ? "light" : "dark"}`}>
      <header className="App-header">
       
        <Form/>
        <div className='toggle'> 
        <span> {theme.toUpperCase()} MODE </span>
        <label className="switch">
        <input type="checkbox" onChange={handleToggle}/>
        <span className="slider round"></span>
        </label>
        </div>
      </header>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
