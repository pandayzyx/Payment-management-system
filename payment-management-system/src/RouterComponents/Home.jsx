import React from  "react"
import {connect} from "react-redux"
import { v4 as uuidv4 } from 'uuid';
import {Link} from  "react-router-dom"


class Home extends React.Component{
    constructor(props){
        super(props)
            this.state = {
              selectUser:""
            }
        
    }
    handleChange =(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
    }

    render(){
        let {User} =  this.props
        return(
            <div className = "row">
            <div className = "col-6">
           <select name = "selectUser" onChange = {(e)=>this.handleChange}  value  ={this.state.selectUser} className = "form-control">
            <option value = "">--Choose User </option>
            {
                User.map(item=><option key = {uuidv4()} value = {item}><Link></Link></option>)
            }
           </select>
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

