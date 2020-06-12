import {createStore} from  "redux"
import { v4 as uuidv4 } from 'uuid';
import {reducer} from "./reducer"

const initState = {
    User:[
       {
          User:"Gaurav",
          id:1
       },
       {
        User:"Sana",
        id:2
       },
         
    ],
 Category:[
    {
        Category:"House Rent",
        id:uuidv4()  
       },
    {
        Category:"Salary",
        id:uuidv4()
     },
     
 ],
 Type:["Expense","Saving"],
 UserExpenseDetails:[
     {
         id:1,
         details:[{Description:"",Amount:45,Type:"Expense"}]
     },
     {
        id:2,
        details:[{Description:"",Amount:45,Type:"Expense"}]
    }
     
 ]

    
}
 const store  = createStore(reducer,initState)

 export default store