import {ADD_USER,ADD_CATEGORY} from  "./actiontype"

export const reducer = (state,action)=>{
    
    switch(action.type){
        case ADD_USER:{
            return{
                ...state,
                User:[...state.User,action.payload]
            }
        }
        case ADD_CATEGORY:{
            return{
                ...state,
            Category:[...state.Category,action.payload]
            }
        }
        default:{
            return{
                ...state
            }
        }
    }
}

