import {createStore} from  "redux"
import {reducer} from "./reducer"

const initState = {
    User:[],
    Category:[]
}
 const store  = createStore(reducer,initState)

 export default store