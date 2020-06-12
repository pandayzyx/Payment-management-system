import React from "react"
import {connect} from  "react-redux"
import {addUser} from "../Redux/action"
import { v4 as uuidv4 } from 'uuid';



class User extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            user :""
        }
    }
handleChange =(e)=>{
   this.setState({
       [e.target.name]:e.target.value
   })
}

    render(){
        let userDetails = {
            User:this.state.user,
            id:uuidv4()
        }
        console.log(this.props)
        let {addUser,User} = this.props
        console.log(User)
        return(
            <div className ="container mt-3 p-3">

                <div style = {{overflow:"hidden"}} className = "col-6 bg bg-secondary p-5 offset-3">
                    <input name = "user" value = {this.state.user} onChange  = {(e)=>this.handleChange(e)} className ="form-control"/>
                    <button onClick = {()=>addUser(userDetails)} className = "btn btn-danger mt-2">Add User</button>
                <ul>
   
                {
                   User.map(item=><li style = {{fontSize:"30px"}} className = "font-weight-bold" key  ={uuidv4()} >{item.User}</li>)
            }
                </ul>

                </div>
            </div>
        )
    }
}

const MapStateToProps = state=>{
    return{
        User:state.User
    }
  }
const MapDispatchToProps  = dispatch=>{
return{
    addUser:(payload)=>dispatch(addUser(payload))
}
}

export default connect(MapStateToProps,MapDispatchToProps)(User)




