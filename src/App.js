import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import './App.css';

import Header from './components/Header';
import Input from './components/Input';
import Todo from './components/Todo';

function App() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState("")
  const [todoEditing, setTodoEditing] = useState(null)
  const [editingText, setEditingText] = useState("")
  // const [archivedTodos, setArchivedTodos] = useState([])

  const inputTextHandler = (event) => {
    setTodo(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()

    const newTodo = {
      id: uuidv4(),
      text: todo,
      completed: false
    }

    setTodos([...todos].concat(newTodo))
    setTodo("")
  }

  const deleteTodoHandler = (id) => {
    const updatedTodos = [...todos].filter(todo => todo.id !== id)
    setTodos(updatedTodos)
  }

  const toggleCompleteHandler = (id) => {
    const updatedTodos = [...todos].map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const editingTextInputHandler = (event) => {
    setEditingText(event.target.value)
  }

  const editTodoHandler = (id) => {
    const updatedTodos = [...todos].map(todo => {
      if (todo.id === id) {
        todo.text = editingText
      }
      return todo
    })
    setTodos(updatedTodos)
    setTodoEditing(null)
    setEditingText("")
  }

  // const setArchivedTodosHandler = (id) => {
  //   const archivedTodos = [...todos].map(todo => {
  //     return todo.id === id ? todo : ""
  //   })
  //   setArchivedTodos(archivedTodos)
  // }

  return (
    <div className="App">
      <Header />
      <Input 
        submitHandler={submitHandler} 
        inputTextHandler={inputTextHandler} 
        todo={todo} 
      />
      <Todo 
        todos={todos}
        todoEditing={todoEditing}
        editingTextInputHandler={editingTextInputHandler}
        editingText={editingText} 
        deleteTodoHandler={deleteTodoHandler}
        toggleCompleteHandler={toggleCompleteHandler}
        editTodoHandler={editTodoHandler}
        setTodoEditing={setTodoEditing}
      />
    </div>
  );
}

export default App;

