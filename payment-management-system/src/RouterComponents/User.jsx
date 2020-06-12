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
        let {User} = this.props
        let Details = {

            userDetails:{
                User:this.state.user,
                id:(User[User.length-1].id)*2+1,
            },
            userExpenseDetails:{
            id:(User[User.length-1].id)*2+1,
         Budget:"",
         details:[{Description:"Bought Sugar",Amount:45,Type:"Expense",day:1,Category:"House Rent"}]
            }
           

        }
        let {addUser} = this.props
        console.log(User[User.length-1])
        return(
            <div className ="container mt-3 p-3">

                <div style = {{overflow:"hidden"}} className = "col-6 bg bg-secondary p-5 offset-3">
                    <input name = "user" value = {this.state.user} onChange  = {(e)=>this.handleChange(e)} className ="form-control"/>
                    <button onClick = {()=>addUser(Details)} className = "btn btn-danger mt-2">Add User</button>
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




