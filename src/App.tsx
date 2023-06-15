import React, { useState } from 'react';
import TodoList, { Task } from './components/TodoList';


let tasks1: Task[] = [
  {id: 1, name: 'wash a cat', isDone: false},
  {id: 2, name: 'eat a sandwich', isDone: false},
  {id: 3, name: 'go for a walk', isDone: false},
  {id: 4, name: 'learn TS', isDone: false}
]

function App() {

  const [tasks, setTasks] = useState(tasks1)
  
  function deleteTask(task: Task) {
    setTasks(tasks.filter(t => t.id !== task.id))
  }

  return (
    <div className="App">
      <TodoList title={'My tasks'} tasks={tasks} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
