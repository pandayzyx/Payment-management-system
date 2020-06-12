import React  from  "react"
import {connect} from  "react-redux"
import { v4 as uuidv4 } from 'uuid';


class UserExpenseDetails extends React.Component{
    constructor(props){
        super(props)
           this.state ={
              budget :"",
              description:"",
              amount:"",
              type:""
           }
        
    }
    handleChange =(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
     }
  render (){
    let {match,User,Type} =  this.props
    console.log(User)
    let arr = [1000,2000,3000,5000,10000,15000,20000,30000,50000]
    let item  =  User.find(item=>item.id === Number((match.params.id)))
    console.log(item)
     return(
         <>
     <div className = "row">
            <div className = "col-4 offset-4">
            
            <select name = "id" onChange = {(e)=>this.handleChange(e)}  value  = {this.state.id} className = "form-control">
            <option value = "">--Choose Budget</option>
            {
                arr.map(item=><option key = {uuidv4()} value = {item}>{item}</option>)
            }
           </select>
                
                </div> 
     </div>
     <div className  = "row mt-5 ">
         <div className = "col-4">
         <input placeholder  ="Enter Description" name = "description" value = {this.state.description} onChange  = {(e)=>this.handleChange(e)} className ="form-control"/>
           
         </div>
         <div className ="col-4">
         <input placeholder ="Enter Amount" name = "amount" value = {this.state.amount} onChange  = {(e)=>this.handleChange(e)} className ="form-control"/>

         </div>
         <div className = "col-4">
         <select name = "id" onChange = {(e)=>this.handleChange(e)}  value  = {this.state.id} className = "form-control">
            <option value = "">--Choose Type</option>
            {
                Type.map(item=><option key = {uuidv4()} value = {item}>{item}</option>)
            }
           </select> 
         </div>
         <div className = "col-4 offset-4 mt-4">
             <button className = "btn btn-danger">Add</button>
         </div>
     </div>
     </>
     )
  }
}

const MapStateToProps = state=>{
    return{
        User:state.User,
        Type:state.Type
    }
  }
// const MapDispatchToProps  = dispatch=>{
// return{
//     addUser:(payload)=>dispatch(addUser(payload))
// }
// }

export default connect(MapStateToProps,null)(UserExpenseDetails)