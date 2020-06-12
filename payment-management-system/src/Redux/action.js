import {ADD_USER,ADD_CATEGORY} from  "./actiontype"

export const addUser =(obj )=>{
   return{
       type:ADD_USER,
       payload:obj
   }
}

export const addCategory =(obj)=>{
    console.log(obj)
    return{
        type:ADD_CATEGORY,
        payload:obj
    }
 }

 
 