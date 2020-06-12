import {createStore} from  "redux"
import { v4 as uuidv4 } from 'uuid';
import {reducer} from "./reducer"

const initState = {
    User:[
       {
          User:"Gaurav",
          id:uuidv4()
       },
       {
        User:"Sana",
        id:uuidv4()  
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
 Type:["Expense","Saving"]

    
}
 const store  = createStore(reducer,initState)

 export default store