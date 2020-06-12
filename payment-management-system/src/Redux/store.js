import {createStore} from  "redux"
import {reducer} from "./reducer"

const initState = {
    cartArr:[],
    counter:0
}
 const store  = createStore(reducer,initState)

 export default store