import React, { useEffect, useState } from 'react';
import TodoList, { Task } from './components/TodoList';
import { v1 } from 'uuid';


let tasks1: Task[] = [
  {id: v1(), name: 'wash a cat', isDone: false},
  {id: v1(), name: 'eat a sandwich', isDone: false},
  {id: v1(), name: 'go for a walk', isDone: false},
  {id: v1(), name: 'learn TS', isDone: false}
]

function App() {
  const [tasks, setTasks] = useState(tasks1)
  const [tasksToShow, setTasksToShow] = useState(tasks)
  
  function deleteTask(id: string) {
    setTasks(tasks.filter(t => t.id !== id))
  }

  function addTask(task: Task) {
    setTasks([...tasks, task])
  }

  useEffect(() => {
    setTasksToShow(tasks)
  }, [tasks])

  function changeIsDone(id: string) {

   let updatedTasks = tasks.map(t => {
      if(t.id === id) {
        return {...t, isDone: !t.isDone}
      }
      return t
   })
   setTasks(updatedTasks)
  }


  function filterTasks(type: string) {     
    if(type === 'all') {
        return setTasksToShow(tasks)
    } else if(type === 'done') {
        return setTasksToShow(tasks.filter(t => t.isDone))
    } else if(type === 'active') {
        return setTasksToShow(tasks.filter(t => !t.isDone))
    }
    
  }
  return (
    <div className="App">
      <h1>My tasks</h1>
      <div className='main-container'>
        <TodoList 
          title={'My tasks'} 
          tasks={tasksToShow} 
          deleteTask={deleteTask} 
          changeIsDone={changeIsDone}
          setFilterType={filterTasks}
          addTask={addTask}/>
          <TodoList 
          title={'My tasks'} 
          tasks={tasksToShow} 
          deleteTask={deleteTask} 
          changeIsDone={changeIsDone}
          setFilterType={filterTasks}
          addTask={addTask}/>
      </div>
    </div>
  );
}

export default App;
