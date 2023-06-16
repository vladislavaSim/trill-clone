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
}
export default function TodoList(props: PropsType) {
    const [newTaskName, setNewTaskName] = useState('')
    const [tasksList, setTasksList] = useState(props.tasks)

    console.log(props.tasks);
   

    function makeNewTask() {
        let obj: Task = {id: props.tasks[props.tasks.length - 1].id + 1,
                        name: newTaskName, 
                        isDone: false};
        props.addTask(obj)
        setNewTaskName('')
    }
console.log('list');

    useEffect(() => {
        // console.log(props.tasks);
        console.log('taskslist');
        setTasksList(props.tasks)
    }, [props.tasks])
    
  return (
    <>
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
                {tasksList.map((task, key) => {
                    return <li key={key}>
                        <span>{task.name}</span>
                        <input type="checkbox" 
                            checked={task.isDone} 
                            onChange={() => props.changeIsDone(task.id)}/>
                        <button onClick={() => props.deleteTask(task.id)}>x</button>
                    </li>
                })}
            </ul>
            <div>
                <button>All</button>
                <button>Completed</button>
                <button>Active</button>
            </div>
        </div>
    </>
  )
}
