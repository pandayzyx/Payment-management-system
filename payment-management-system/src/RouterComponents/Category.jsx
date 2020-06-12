import React from "react"
import {connect} from  "react-redux"
import {addCategory}  from "../Redux/action"
import { v4 as uuidv4 } from 'uuid';


export class Category extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            category :""
        }
    }
handleChange =(e)=>{
   this.setState({
       [e.target.name]:e.target.value
   })
}

    render(){
     let categoryDetails = {
         Category:this.state.category,
         id:uuidv4()
     }
     console.log(this.props)
     let {addCategory,Category} = this.props
        return(
            <div className ="conntainer">
                    <div className = "row">
                <div className = "col-4">
                    <input placeholder ="Add category" name = "category" value = {this.state.category} onChange  = {(e)=>this.handleChange(e)} className ="form-control"/>
                    <button onClick = {()=>addCategory(categoryDetails)} className = "btn btn-danger">Add User</button>
                </div>
               {
                   Category.map(item=><li>{item.Category}</li>)
               }
                    </div>
            </div>
        )
    }
}

const MapStateToProps = state=>{
  return{
      Category:state.Category
  }
}

const MapDispatchToProps  = dispatch=>{
return{
    addCategory: (payload)=>dispatch(addCategory(payload))
  }
}

export default connect(MapStateToProps,MapDispatchToProps)(Category)



