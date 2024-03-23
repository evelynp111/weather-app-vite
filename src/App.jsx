import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Weather from "./Weather"

export default function App() {

  return (
   <div className="App">
    <Weather defaultCity="Los Angeles"/>
      <footer>This project was coded by {" "}
         <a href="https://github.com/evelynp111" target="_blank" rel="noreferrer">
                Evelyn {" "}
          </a>
                and is open-sourced on {" "}    
          <a href="https://github.com/evelynp111" target="_blank" rel="noreferrer">
                GitHub 
          </a>.
        </footer>
   </div>
  )
}
