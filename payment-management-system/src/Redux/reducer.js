import {
	ADD_USER,
	ADD_CATEGORY,
	ADD_USER_EXPENSE_DETAILS,
	ADD_BUDGET,
} from "./actiontype";

export const reducer = (state, action) => {
	console.log(45);
	switch (action.type) {
		case ADD_USER: {
			return {
				...state,
				User: [...state.User, action.payload.userDetails],
				UserExpenseDetails: [
					...state.UserExpenseDetails,
					action.payload.userExpenseDetails,
				],
			};
		}
		case ADD_CATEGORY: {
			return {
				...state,
				Category: [...state.Category, action.payload],
			};
		}

		case ADD_USER_EXPENSE_DETAILS: {
			return {
				...state,
				UserExpenseDetails: state.UserExpenseDetails.map((item) =>
					item.id === action.payload.id
						? {
								...item,
								// Budget: action.payload.Budget||action.payload,
								Budget:
									action.payload.Type === "Expense"
										? Number(item.Budget) - Number(action.payload.Amount) < 0
											? 0
											: Number(item.Budget) - Number(action.payload.Amount)
										: Number(item.Budget) + Number(action.payload.Amount),
								details: [...item.details, action.payload],
						  }
						: item
				),
			};
		}
		case ADD_BUDGET: {
			console.log(action.payload.id);
			return {
				...state,
				UserExpenseDetails: state.UserExpenseDetails.map((item) =>
					item.id === Number(action.payload.id)
						? {
								...item,

								Budget: action.payload.Budget,
						  }
						: item
				),
			};
		}

		default: {
			return {
				...state,
			};
		}
	}
};
