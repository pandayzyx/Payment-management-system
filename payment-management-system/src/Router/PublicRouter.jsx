import React from "react"
import {Route,Switch} from  "react-router-dom"
import Home from  "../RouterComponents/Home"
import Category from  "../RouterComponents/Category"
import User from  "../RouterComponents/User"



export default function PublicRouter(){
    console.log(Category)
    return(
       
     <Switch>
         <Route  exact path = "/" render = {(props)=><Home/>}></Route>
         <Route  path = "/category" render = {(props)=><Category/>}></Route>
         <Route  path = "/user" render = {(props)=><User {...props}/>}></Route>
     </Switch>
    )
}