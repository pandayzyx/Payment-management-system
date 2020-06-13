import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";


const Navbar = () => {
	let data = [
		{
			link: "Home",
			path: "/",
		},
		{
			link: "User",
			path: "/user",
		},
		{
			link: "Category",
			path: "/category",
		},
	];
	return (
		<>
		<div className="row text-primary bg bg-white mb-3 p-4 shadow-lg ">
			<div>
				<img style = {{height:"45px"}}className ="img-fluid" src = "https://www.realbyteapps.com/assets/common/appIcon_192.png"alt = "img"></img>
			</div>
			<h1 style={{ float: "left" }}>Expense Manager</h1>
			
			{data.map((item) => (
				<div key={uuidv4()} className="col-2 mt-3 ml-5">
					<Link style={{ color: "black", fontWeight: "Bold",fontSize:"25px" }} to={item.path}>
						{item.link}
					</Link>
				</div>
			))}
		</div>
	
		</>
	);
};
export default Navbar;
