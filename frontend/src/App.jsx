import React, { useState } from 'react'
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks]=useState([]);
  const [editingTask, setEditingTask] = useState(null)

  const addTask =(task)=>{
    setTasks([...tasks,{...task,id:Date.now()}])
  }
  const updateTask = (updatedTask) =>{
    setTasks(tasks.map(task=>(task.id === updatedTask.id ? updatedTask:task)))
    setEditingTask(null)
  }
  const handleEdit=(task)=>{
    setEditingTask(task)
  }
  
  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onSubmit={editingTask ? updateTask:addTask} editingTask={editingTask}/>
      <TaskList tasks={tasks} onEdit={handleEdit}/>
    </div>
  )
}

export default App