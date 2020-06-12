import React from  "react"
import {Link} from  "react-router-dom"
import { v4 as uuidv4 } from 'uuid';

const Navbar = ()=>{
let data = [
    {
        link:"Home",
        path:"/"
    },
    {
        link:"User",
        path:"/user"
    },
    {
        link:"Category",
        path:"/category"
    }
]
    return(
      
            <div className  = "row text-primary bg bg-light p-4 shadow-lg ">
           {
               data.map(item=><div  key = {uuidv4()} className = "col-4"><Link style = {{color:"black",fontWeight:"Bold"}} to =  {item.path}>{item.link}</Link></div>)
           }
            </div>
    
    )
}
export default Navbar