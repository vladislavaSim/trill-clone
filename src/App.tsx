import React, { useEffect, useState } from 'react';
import TodoList, { Task } from './components/TodoList';


let tasks1: Task[] = [
  {id: 1, name: 'wash a cat', isDone: false},
  {id: 2, name: 'eat a sandwich', isDone: false},
  {id: 3, name: 'go for a walk', isDone: false},
  {id: 4, name: 'learn TS', isDone: false}
]

function App() {
  const [tasks, setTasks] = useState(tasks1)
  const [tasksToShow, setTasksToShow] = useState(tasks)
  
  function deleteTask(id: number) {
    setTasks(tasks.filter(t => t.id !== id))
  }

  function addTask(task: Task) {
    setTasks([...tasks, task])
  }

  useEffect(() => {
    setTasksToShow(tasks)
  }, [tasks])

  function changeIsDone(id: number) {

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
      <TodoList 
        title={'My tasks'} 
        tasks={tasksToShow} 
        deleteTask={deleteTask} 
        changeIsDone={changeIsDone}
        setFilterType={filterTasks}
        addTask={addTask}/>
    </div>
  );
}

export default App;
