import React from 'react'

const ToDoTask = ({ task, doubleClickAction, deleteAction }) => {
  const taskBlockStyle = {
    backgroundColor: !task.reminder && "#e8eaff",
    transition: "0.5s"
  }

  const reminderStyle = {
    color: "#9ea5e9", 
    marginTop: 10, 
    display: task.reminder ? "block" : "none"
  }

  return (
    <div className="todo-task" onDoubleClick={() => doubleClickAction(task.id)} style={taskBlockStyle}>
      <h3>
        {task.task}
      </h3>
      <p> 
        {task.duration}
      </p>
      <div className="col-md-6" style={{textAlign: "left", display: "block"}}>
          <p style={reminderStyle}> Remind Me </p>
      </div>
      <div className="col-md-6" style={{textAlign: "right", width: !task.reminder && "100%"}}>
        <p>
          <button 
            type="button" 
            className="btn btn-danger-bd"
            onClick={() => deleteAction(task.id)}
          > Clear task </button>
        </p>
      </div>
    </div>
  )
}

export default ToDoTask
