import React from 'react';
import './App.css';
import Navbar from  "../src/Components/Navbar.jsx"
import PublicRouter from  "./Router/PublicRouter"


function App() {
  return (
    <div style = {{background:"grey"}} className="App">
     <Navbar/>
     <PublicRouter/>
    </div>
  );
}

export default App;
