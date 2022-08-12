import React from 'react'
import { Todo } from '../model'
import SingleTodo from './SingleTodo';
import './styles.css'

interface Props {
    todos: Todo[];
    setTodos: any;
}
const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  const handleDone = (id: number) => {
    setTodos(
        todos.map(todo => 
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        )
    )
  }
  
  const handleEdit = (e: React.FormEvent, id: number, edited: string, onSuccess?: any) => {
    e.preventDefault()

    setTodos(
        todos.map(todo => 
            todo.id === id ? { ...todo, todo: edited } : todo
        )
    )

    if(onSuccess) onSuccess()
  }
  
  const handleDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id ))
  }

  return (
    <div className="todos">
        {
            todos.map(todo => (
               <SingleTodo todo={todo} key={todo.id} handleDone={handleDone} handleDelete={handleDelete} handleEdit={handleEdit}/>
            ))
        }
    </div>
  )
}

export default TodoList