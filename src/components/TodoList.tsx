import React, { useEffect, useState } from 'react'

export type Task = {
    id: number,
    name: string,
    isDone: boolean
}

type PropsType = {
    title: string | undefined,
    tasks: Task[],
    deleteTask: (id: number) => void
    addTask: (task: Task) => void
    changeIsDone: (id: number) => void
    setFilterType: (filterType: string) => void
}
export default function TodoList(props: PropsType) {
    const [newTaskName, setNewTaskName] = useState('')
    const [tasks, setTasks] = useState(props.tasks)
    
    useEffect(() => {
        setTasks(props.tasks)
    }, [props]) //auto update tasks while their data in parent file changes

    function makeNewTask() {
        let obj: Task = {id: props.tasks[props.tasks.length - 1].id + 1,
                        name: newTaskName, 
                        isDone: false};
        props.addTask(obj)
        setNewTaskName('')
    }

    
  return (
    <div className='todo-container'>
        <h3>{props.title}</h3>
        <div>
            <input type="text" onChange={(e) => setNewTaskName(e.target.value)} value={newTaskName}/>
            <button 
            disabled={!newTaskName}
            onClick={() => makeNewTask()}>
                add
            </button>
        </div>
        <div>
            <ul>
                {tasks.length ? tasks.map((task, key) => {
                    return <li key={key}>
                        <span>{task.name}</span>
                        <input type="checkbox" 
                            checked={task.isDone} 
                            onChange={() => props.changeIsDone(task.id)}/>
                        <button onClick={() => props.deleteTask(task.id)}>x</button>
                    </li>
                })
                : <h5>no tasks</h5>
            }
            </ul>
            <div>
                <button onClick={() => props.setFilterType('all')}>All</button>
                <button onClick={() => props.setFilterType('done')}>Completed</button>
                <button onClick={() => props.setFilterType('active')}>Active</button>
            </div>
        </div>
    </div>
  )
}
