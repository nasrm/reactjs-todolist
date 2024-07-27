import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState("")
  
  function persistTodos (todos) {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  function addTodo (newTodo) {
    const newTodos = [...todos, newTodo]
    persistTodos(newTodos)
    setTodos(newTodos)
  }

  function removeTodo (index) {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    persistTodos(newTodos)
    setTodos(newTodos)
  }

  function editTodo (index) {
    removeTodo(index)
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
  }

  useEffect(() => {
    if (!localStorage) 
      return

    let localTodos = localStorage.getItem("todos")
    if (!localTodos) 
      return

    localTodos = JSON.parse(localTodos)
    setTodos(localTodos)
  }
  , [])

  return (
    <>
        <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} addTodo = {addTodo}/>
        <TodoList editTodo = {editTodo} removeTodo = {removeTodo} todos={todos}/>
    </>
  )
}

export default App
