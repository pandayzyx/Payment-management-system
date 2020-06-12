import {ADD_USER,ADD_CATEGORY} from  "./actiontype"

const addUser =(obj )=>{
   return{
       type:ADD_USER,
       payload:obj
   }
}

const addCategory =(obj )=>{
    return{
        type:ADD_CATEGORY,
        payload:obj
    }
 }
 