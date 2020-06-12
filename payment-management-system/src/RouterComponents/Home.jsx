import React from  "react"
import {connect} from "react-redux"
import { v4 as uuidv4 } from 'uuid';
import {Link} from  "react-router-dom"


class Home extends React.Component{
    constructor(props){
        super(props)
            this.state = {
              id:""
            }
        
    }
    handleChange =(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
    }

    render(){
        let {User} =  this.props
        console.log(this.state.id)
        return(
            <div className = "row mt-5">
            <div className = "col-6">
           <select name = "id" onChange = {(e)=>this.handleChange(e)}  value  = {this.state.id} className = "form-control">
            <option value = "">--Choose User </option>
            {
                User.map(item=><option key = {uuidv4()} value = {item.id}>{item.User}</option>)
            }
           </select>
           <br></br>
            <Link style = {{padding:"10px 25px",background:"red",color:"white"}} to = {`/user/${this.state.id}`}>Go</Link>
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


    
export default connect(MapStateToProps,null)(Home)

