import {ADD_USER,ADD_CATEGORY} from  "./actiontype"

export const reducer = (state,action)=>{
    switch(action.type){
        case ADD_USER:{
            return{
                ...state,
                User:[...state,action.paylaod]
            }
        }
        case ADD_CATEGORY:{
            return{
                ...state,
            Category:[...state,action.paylaod]
            }
        }
        default:{
            return{
                ...state
            }
        }
    }
}

