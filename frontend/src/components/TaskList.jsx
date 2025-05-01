import React from 'react'

const TaskList = ({tasks, onEdit}) => {
  return (
    <div>
        <h2>Tasks</h2>
        {tasks.length===0 && <p>No tasks added</p>}
        <ul>
            {tasks.map(task =>(
                <li key={task.id}>
                    <strong>{task.title}</strong> - {task.status}
                    <button onClick={()=> onEdit(task)}>Edit</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default TaskList