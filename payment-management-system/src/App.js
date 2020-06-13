import React from "react";

import Navbar from "../src/Components/Navbar.jsx";
import PublicRouter from "./Router/PublicRouter";
import Footer from "./Components/Footer";
import Chart from "./Components/Chart";

function App() {
	return (
		<div style={{ background: "white" }} className="App container-fluid pb-0">
			<Navbar />
			<PublicRouter />
			<h1 className="offset-5 mb-5 mt-3">Features</h1>
			<Chart />
			<Footer />
		</div>
	);
}

export default App;
