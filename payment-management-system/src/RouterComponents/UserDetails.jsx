import React  from  "react"
import {connect} from  "react-redux"

class UserDetails extends React.Component{
    constructor(props){
        super(props)
           this.state ={
               name:"sex"
           }
        
    }
  render (){
    let {match,User} =  this.props
    console.log(User)
    let item  =  User.find(item=>item.id === (match.params.id))
    console.log(item)
     return(
     <div>
     {
         item && <div>{item.User}</div>
     }
     </div>
     )
  }
}

const MapStateToProps = state=>{
    return{
        User:state.User
    }
  }
// const MapDispatchToProps  = dispatch=>{
// return{
//     addUser:(payload)=>dispatch(addUser(payload))
// }
// }

export default connect(MapStateToProps,null)(UserDetails)