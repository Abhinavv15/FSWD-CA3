import React, { useEffect, useState } from 'react'

const TaskForm = ({onSubmit, editingTask}) => {
    const [title, setTitle] = useState('')
    const [status, setStatus] = useState('Pending')

    useEffect(() => {
        if (editingTask){
            setTitle(editingTask.title)
            setStatus(editingTask.status)
        } else{
            setTitle('')
            setStatus('Pending')
        }
    },[editingTask])

    const handleSubmit =(e)=>{
        e.preventDefault()
        if(!title.trim()) return
        const task ={
            id: editingTask ? editingTask.id : null,
            title,
            status
        }
        onSubmit(task)
        setTitle('')
        setStatus('Pending')
    }

  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text"
            placeholder='Task'
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
        />
        <select value={status} onChange={(e)=> setStatus(e.target.value)}>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
        </select>
        <button type='submit'>{editingTask ? 'Updated Task' : 'Add Task'}</button>

    </form>
  )
}

export default TaskForm