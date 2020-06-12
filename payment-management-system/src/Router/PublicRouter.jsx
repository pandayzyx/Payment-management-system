import React from "react"
import {Route,Switch} from  "react-router-dom"
import Home from  "../RouterComponents/Home"
import Category from  "../RouterComponents/Category"
import User from  "../RouterComponents/User"
import UserDetails  from  "../RouterComponents/UserDetails"



export default function PublicRouter(){
    console.log(Category)
    return(
       
     <Switch>
         <Route  exact path = "/" render = {(props)=><Home/>}></Route>
         <Route  path = "/category" render = {(props)=><Category/>}></Route>
         <Route exact path = "/user" render = {(props)=><User {...props}/>}></Route>
         <Route  path = "/user/:id" render = {(props)=><UserDetails{...props}/>}></Route>
         <Route path = "" >User Not Found</Route>
     </Switch>
    )
}