import React, {Component} from 'react'
import toDoListArr from './components/toDoList/toDoListAPI'
import ToDos from './components/toDoList/toDos'


class ToDoList extends Component{
  constructor(){
    super();
    this.state = {
      isChecked: toDoListArr
    }
    this.handleCheckBox = this.handleCheckBox.bind(this)
  }

  handleCheckBox(id){
    this.setState(prevState=>{
      const checkState = prevState.isChecked.map(list=>{
        return list.id === id && !list.checked
      })
      return{
        isChecked: checkState
      }
    })
    console.log(this.state.isChecked)
  }
  render(){
    const ToDoListBlock = toDoListArr.map(list=>
      <ToDos 
        key={list.id} 
        toDos={list}
        handleChange={this.handleCheckBox}
      />
    )
    return(
      <div className="col-12 body" style={{backgroundColor: "#d9d9d9"}}>
        <div className="div-to-do-list col-xs-11 col-md-8 col-sm-8 col-lg-6"
        style={{float: "left"}}>
          <h1 style={{clear: "left"}}>To-Do List</h1>
          <div className="todos-block">
            <ul>
              {ToDoListBlock}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default ToDoList