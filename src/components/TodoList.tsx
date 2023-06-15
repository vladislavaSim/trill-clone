import React from 'react'

export type Task = {
    id: number,
    name: string,
    isDone: boolean
}

type PropsType = {
    title: string | undefined,
    tasks: Task[],
    deleteTask: (task: Task) => void
}
export default function TodoList(props: PropsType) {
  return (
    <>
        <h3>{props.title}</h3>
        <div>
            <input type="text" />
            <button>add</button>
        </div>
        <div>
            <ul>
                {props.tasks.map(task => {
                    return <li>
                        <span>{task.name}</span>
                        {/* <input type="checkbox" checked={task.isDone}/> */}
                        <button onClick={() => props.deleteTask(task)}>x</button>
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
