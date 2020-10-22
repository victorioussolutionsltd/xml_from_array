import React from 'react';
import './App.css';
import { arrayToXml } from "./xmlHelper";

function App() {

  const printXml = () => console.log(arrayToXml({ array: ['1', '2'] }))

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Press button to get xml output in console
        </p>
        <button onClick={printXml}>Print XML</button>
      </header>
    </div>
  );
}

export default App;
