import React  from  "react"
import {connect} from  "react-redux"
import { v4 as uuidv4 } from 'uuid';
import {addUserExpenseDetails} from  "../Redux/action"
import Table from  "../Components/Table"


class UserExpenseDetails extends React.Component{
    constructor(props){
        super(props)
           this.state ={
              budget :"",
              description:"",
              amount:"",
              type:"",
              day:"",
              category:""
           }
        
    }
    handleChange =(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
     }
  render (){
    let {match,User,Type,addUserExpenseDetails,UserExpenseDetails,Category} =  this.props
    let item  =  User.find(item=>item.id === Number(match.params.id))
    let tableData = UserExpenseDetails.find(item=>item.id=== Number(match.params.id))
    let userExpenseData = tableData.details
    console.log(userExpenseData)
    

    
    console.log(this.state.budget)
    let arr = [1000,2000,3000,5000,10000,15000,20000,30000,50000]
    let userDetails = {
        id:Number(match.params.id),
        Description:this.state.description,
        Amount:this.state.amount,
        Budget:this.state.budget,
        Type:this.state.type,
        Category:this.state.category
    }
    let i = 1
    let dayArr =[]
    while(i<=30){
        dayArr.push(i)
        i++
    }
     return(
         <>
           <h2> Hi!{item.User}</h2>
     <div className = "row mt-4">
            <div className = "col-4 offset-4">
            
            <select name = "budget" onChange = {(e)=>this.handleChange(e)}  value  = {this.state.budget} className = "form-control">
            <option value = "">--Choose Budget</option>
            {
                arr.map(item=><option key = {uuidv4()} value = {item}>{item}</option>)
            }
           </select>
                
                </div> 
     </div>
     <div className  = "row mt-5 ">
         <div className = "col-2 offset-1">
         <input placeholder  ="Enter Description" name = "description" value = {this.state.description} onChange  = {(e)=>this.handleChange(e)} className ="form-control"/>
           
         </div>
         <div className ="col-2">
         <input placeholder ="Enter Amount" name = "amount" value = {this.state.amount} onChange  = {(e)=>this.handleChange(e)} className ="form-control"/>

         </div>
         <div className = "col-2">
         <select name = "type" onChange = {(e)=>this.handleChange(e)}  value  = {this.state.type} className = "form-control">
            <option value = "">--Choose Type</option>
            {
                Type.map(item=><option key = {uuidv4()} value = {item}>{item}</option>)
            }
           </select> 
         </div>
         <div className  ="col-2">
         <select name = "day" onChange = {(e)=>this.handleChange(e)}  value  = {this.state.day} className = "form-control">
            <option value = "">--Choose Day</option>
            {
                dayArr.map(item=><option key = {uuidv4()} value = {item}>{item}</option>)
            }
           </select>
         </div>

         <div className  ="col-2">
         <select name = "category" onChange = {(e)=>this.handleChange(e)}  value  = {this.state.category} className = "form-control">
            <option value = "">--Choose Category</option>
            {
                Category.map(item=><option key = {uuidv4()} value = {item.Category}>{item.Category}</option>)
            }
           </select>
         </div>
         <div className = "col-4 offset-4 mt-4">
             <button onClick ={()=>addUserExpenseDetails(userDetails)} className = "btn btn-danger">Add</button>
         </div>
         <Table data = {userExpenseData}/>
     </div>
     </>
     )
  }
}

const MapStateToProps = state=>{
    return{
        User:state.User,
        Type:state.Type,
        UserExpenseDetails:state.UserExpenseDetails,
        Category:state.Category
    }
  }
const MapDispatchToProps  = dispatch=>{
return{
    addUserExpenseDetails:(payload)=>dispatch(addUserExpenseDetails(payload))
}
}

export default connect(MapStateToProps,MapDispatchToProps)(UserExpenseDetails)