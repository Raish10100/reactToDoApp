import { useState } from 'react';
import './App.css';
import AddTodos from './components/AddTodos';
import TodoList from './components/TodoList';

function App() {
  
  const [todoList, setTodoList] = useState([
    // { time: '5:30:00' , text: "Learn React" }, { time: '5:25:00', text: "Learn Redux" }
  ])
  
  
    const addTodoHandler = (todoText) => {
          setTodoList([
            ...todoList, { time: new Date().toLocaleTimeString() , text: todoText}
          ])
    }

    const todoDeleteHandler = (index) => {
                  setTodoList([...todoList.slice(0, index), ...todoList.slice(index + 1) ])  //So it create two arrays(0 to index-1 and index to the end index of array) and then concat it to one array and set the state of that array.
      }

  return (
    <div className="App">
      <AddTodos handler={addTodoHandler} />
      <TodoList deleteHandler={ todoDeleteHandler} data={todoList} />
    </div>
  );
}

export default App;
