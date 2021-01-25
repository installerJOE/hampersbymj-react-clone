import React from 'react'

function ToDos(props){
  let listStyle
  if(props.toDos.checked){
    listStyle = {
      color: "#d9d9d9",
      textDecoration: "line-through",
      fontStyle: "italic"
    }
  }
  
  return(
    <li className="to-do col-12">
      <label>
        <div className="col-11" style={listStyle}>
          {props.toDos.item}
        </div>
        <div className="col-1" style={{textAlign: "right"}}>
          <input 
            type="checkbox" 
            checked={props.toDos.checked}
            onChange={()=>props.handleChange(props.toDos.id)}
          />
        </div>
      </label>
    </li>   
  )
}


export default ToDos