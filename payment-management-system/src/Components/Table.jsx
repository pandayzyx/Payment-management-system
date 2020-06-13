import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function Table(props) {
	console.log(props);
	let data = props.data;
	return (
		<table className="table table-striped table-dark mt-3">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Description</th>
					<th scope="col">Amount</th>
					<th scope="col">Type</th>
					<th scope="col">Day</th>
					<th scope="col">Category</th>
				</tr>
			</thead>
			<tbody>
				{data &&
					data.map((item, index) => {
						return (
							<tr key={uuidv4()}>
								<th scope={index + 1}>1</th>
								<td>{item.Description}</td>
								<td>{item.Amount}</td>
								<td
									className={
										item.Type === "Expense" ? "text-danger" : "text-success"
									}
								>
									{item.Type}
								</td>
								<td>{item.day}</td>
								<td>{item.Category}</td>
							</tr>
						);
					})}
			</tbody>
		</table>
	);
}
