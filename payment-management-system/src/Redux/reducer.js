import {ADD_USER,ADD_CATEGORY,ADD_USER_EXPENSE_DETAILS} from  "./actiontype"

export const reducer = (state,action)=>{
    console.log(45)
    switch(action.type){
        case ADD_USER:{
            return{
                ...state,
                User:[...state.User,action.payload.userDetails],
                UserExpenseDetails:[...state.UserExpenseDetails,action.payload.userExpenseDetails]

            }
        }
        case ADD_CATEGORY:{
            return{
                ...state,
            Category:[...state.Category,action.payload]
            }
        }

        case ADD_USER_EXPENSE_DETAILS:{
           console.log(112)
            return{
                ...state,
                UserExpenseDetails:state.UserExpenseDetails.map(item=>item.id === action.payload.id?{...item,Budget:action.payload.Budget,details:[...item.details,action.payload]}:item)
            }
          
        }

        
        
        default:{
            return{
                ...state
            }
        }
    }
}

