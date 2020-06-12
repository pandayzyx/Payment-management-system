import React from "react"


export default function Table(props){
    let data = props
    console.log(data)
    return(
        <table class="table table-striped table-dark mt-3">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Description</th>
      <th scope="col">Amount</th>
      <th scope="col">Type</th>
      <th scope="col">Day</th>
      <th scope="col">Category</th>
    </tr>
  </thead>
  <tbody>
    
    {
   
//    data.map((item,index)=>{
//        return(
        
//         <tr>
//         <th scope = {index+1}>1</th>
//        <td>{item.Description}</td>
//        <td>{item.Amount}</td>
//        <td>{item.Type}</td>
//        <td>{item.day}</td>
//        <td>{item.Category}</td>
//        </tr>
//        )
//    })


    }
  </tbody>
</table>
    )
}

