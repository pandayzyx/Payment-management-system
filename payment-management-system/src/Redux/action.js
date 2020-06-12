import {ADD_USER,ADD_CATEGORY,ADD_USER_EXPENSE_DETAILS} from  "./actiontype"

export const addUser =(obj )=>{
   return{
       type:ADD_USER,
       payload:obj
   }
}

export const addCategory =(obj)=>{
   
    return{
        type:ADD_CATEGORY,
        payload:obj
    }
 }

 export const addUserExpenseDetails =(obj)=>{
   console.log(obj)
    return{
        type:ADD_USER_EXPENSE_DETAILS,
        payload:obj
    }
 }

 

 
 