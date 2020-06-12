import React from 'react';
import './App.css';
import Navbar from  "../src/Components/Navbar.jsx"
import PublicRouter from  "./Router/PublicRouter"


function App() {
  return (
    <div style = {{background:"grey"}} className="App container-fluid pb-4">
      
     <Navbar/>
     <h1>Expense Manager</h1>
     <PublicRouter/>
    </div>
  );
}

export default App;
