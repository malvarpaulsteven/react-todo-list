
import { useState } from 'react';
import './App.css';
import { Task } from "./Task"



function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value)
  }

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask
    }
    setTodoList([...todoList, task]);
  }

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id))
  }
  return (
    <div className="App">
      <div className='todoList'>
        <input onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='task'>
        {todoList.map((task, key) => {
          return (
            <Task
              taskName = {task.taskName}
              id = {task.id}
              deleteTask = {deleteTask}
            />
          );
        })}
      </div> 
    </div>
  );
}

export default App;
