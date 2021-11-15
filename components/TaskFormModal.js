import React from 'react'
import { useState } from 'react'

const TaskFormModal = ({ addTask }) => {
  
  //states for all input data
  const [task, setTask] = useState('')
  const [duration, setDuration] = useState('')
  const [reminder, setReminder] = useState(true)

  // Validation of the form on submission
  const onAdd = (e) => {
    e.preventDefault();
    
    if(!task){
      console.log("Please enter task")
    }
    else if(task.length < 5){
      console.log("Minimum number of characters is 5")
    }
    else{
      addTask({task, duration, reminder})
    }
    setTask('')
    setDuration('')
    setReminder(true)
  }

  return (
    <div>
      <h3> Add Task </h3>
      <form onSubmit={onAdd}>
        <div className="col-md-12">
          <div className="form-group" style={{marginTop:10}}>
            <label>Task </label> <br/>
            <input 
              type="text" 
              className="form-control" 
              value={task} 
              placeholder="Enter task to be done e.g. Cleaning"
              onChange={(e) => setTask(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label> Duration </label> <br/>
            <input 
              type="text" 
              className="form-control" 
              onChange={(e) => setDuration(e.target.value)} 
              value={duration} 
              placeholder="e.g. Two (2) months starting from December 2020"
            />
          </div>

          <p style={{marginTop: "1em"}}>
            <input 
              type="checkbox" 
              value={reminder}
              checked={reminder}
              onChange={(e) => setReminder(e.currentTarget.checked)}
            /> &nbsp;
            <label> Remind me </label>
          </p>
          <p>
            <input 
              type="submit" 
              className="btn btn-blue-bd" 
              value="Add task"
            />
          </p>
        </div>
      </form>
    </div>
  )
}

export default TaskFormModal