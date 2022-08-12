import React, { useEffect, useRef, useState } from 'react'
import { Close, Delete, Done, Edit, Send } from '../assets'
import { Todo } from '../model'
import './styles.css'

interface Props {
    todo: Todo;
    handleDone: (id: number) => void;
    handleDelete: (id: number) => void;
    handleEdit: (e: React.FormEvent, id: number, edited: string, onSuccess?: any) => void;
}

const SingleTodo: React.FC<Props> = ({ todo, handleDone, handleDelete, handleEdit }) => {
  const [edit, setEdit] = useState(false)
  const [editTodo, setEditTodo] = useState(todo.todo)
  const inputRef = useRef<HTMLInputElement>(null)
  
  const toggleEdit = () => {
    !todo.isDone && !edit ? setEdit(!edit) : setEdit(false)
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [edit])

  return (
    <form className="todos__single" onSubmit={(e) => {
        handleEdit(e, todo.id, editTodo, () => {
            setEdit(false)
        })
    }}>
        {
            edit ? (
                <>
                <input
                    ref={inputRef}
                    className="todos__single--text" 
                    type="text"
                    value={editTodo}
                    onChange={(e) => setEditTodo(e.target.value)} 
                    />
                <button type="submit" className="send"><span><Send/></span></button>
                </>
            ) : (
                <span className={`todos__single--text ${todo?.isDone ? "done": ""}`}>{todo.todo}</span>
            )
        }
        <div className="icons">
            {
                edit ? (
                    <span className="icon" onClick={toggleEdit}><Close/></span>
                ) : (
                    <span className="icon" onClick={toggleEdit}><Edit/></span>
                )
            }
            <span className="icon" onClick={() => handleDelete(todo.id)}><Delete/></span>
            <span className="icon" onClick={() => handleDone(todo.id)}><Done/></span>
        </div>
    </form>
  )
}

export default SingleTodo