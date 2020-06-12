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
        <div className  = "container bg bg-dark">
            <div className  = "row">
           {
               data.map(item=><div key = {uuidv4()} className = "col-4"><Link style = {{color:"white",fontWeight:"Bold"}} to =  {item.path}>{item.link}</Link></div>)
           }
            </div>
        </div>
    )
}
export default Navbar