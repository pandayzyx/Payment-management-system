import React from 'react';

import Navbar from  "../src/Components/Navbar.jsx"
import PublicRouter from  "./Router/PublicRouter"
import Footer from "./Components/Footer"


function App() {
  return (
    <div style = {{background:"grey"}} className= "App container-fluid pb-0">
      
     <Navbar/>
     
     <PublicRouter/>
     <Footer/>
    </div>
  );
}

export default App;
