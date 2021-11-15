import React from 'react'
import { useState } from 'react'
import '../css/toDoApp.css'
import toDoListArr from '../components/toDoListArr'
import ToDoTask from '../components/ToDoTask'
import TaskFormModal from '../components/TaskFormModal'
import HorzRule from '../components/HorzRule'


const ToDoApp = () => {
  const doubleClickAction = (id) => {
    setTasks(tasks.map(task => task.id === id ? {...task, reminder:!task.reminder} : task))
  }

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
    // HTTP delete actions
  }

  // Display the modal for adding a task
  // const showAddTaskForm = () => {
    
  // }

  //Action to mark each task
  // const markTasks = () => {
    
  // }

  //action to add a particular task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = {id, ...task}
    setTasks([ ...tasks, newTask]);
  }
  
  /*
    Add state to component using
    const [state_name, function_to_update_state] = useState(initial_value_of_statename)
  */
  const [tasks, setTasks] = useState(toDoListArr)
  // Map all tasks for display
  const ToDoListBlock = tasks.length < 1 ? 
    <div style={{border: 0}}>
      <h3 style={{padding: 10, color: "#9ea5e9"}}> 
        No task has been added yet. 
      </h3> <hr/>
    </div>: 
    tasks.map(todos => 
      <ToDoTask 
        key={todos.id} 
        task={todos} 
        doubleClickAction={doubleClickAction}
        deleteAction={removeTask}
      />
    )
  
  // render jsx
  return (
    <div className="main">
      <div className="opening-project-div">
        <div className="todo-app-block col-md-6 col-sm-10 col-12" style={{margin: "auto", float:"none"}}>
          <h1 style={{marginTop:15, color: "#9ea5e9", textAlign: "center"}}>Task Manager App</h1> 
          {/* Horizontal rules for the main header */}
          <HorzRule width={100} bottom={4}/>
          <HorzRule width={50} bottom={4}/>
          <div className="task-block-mainBody">
            <h2> Scheduled Tasks </h2>
            <p style={{textAlign: "right", marginTop: 16}}>
              <input
                type="button" 
                // onClick={showAddTaskForm} 
                className="btn btn-blue-bd"
                value="Add task"
              />
              &nbsp;
              <input
                type="button" 
                // onClick={markTasks} 
                className="btn btn-blue-bd"
                value="Mark tasks"
              />
                &nbsp;
            </p>
            {ToDoListBlock}  

            <div className="add-task-block">
              <TaskFormModal 
                addTask={addTask} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToDoApp
