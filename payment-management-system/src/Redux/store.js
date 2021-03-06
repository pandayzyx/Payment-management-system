import { createStore } from "redux";
import { v4 as uuidv4 } from "uuid";
import { reducer } from "./reducer";

const initState = {
	User: [
		{
			User: "Gaurav",
			id: 1,
		},
		{
			User: "Saurav",
			id: 2,
		},
	],
	Category: [
		{
			Category: "House Rent",
			id: uuidv4(),
		},
		{
			Category: "Salary Credit",
			id: uuidv4(),
		},
	],
	Type: ["Expense", "Saving"],
	UserExpenseDetails: [
		{
			id: 1,
			Budget: "",
			details: [
				{
					Description: "Paid Rent",
					Amount: 45,
					Type: "Expense",
					day: 1,
					Category: "House Rent",
				},
			],
		},
		{
			id: 2,
			Budget: "",
			details: [
				{
					Description: "Paid Rent",
					Amount: 450,
					Type: "Expense",
					day: 1,
					Category: "House Rent",
				},
			],
		},
	],
};
const store = createStore(reducer, initState);

export default store;
