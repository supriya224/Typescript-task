/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import { TiEdit } from "react-icons/ti";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdDone } from "react-icons/md";
import { Todo } from '../../Interfaces/Interface';

type Props = {
    index: number;
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ index, todo, todos, setTodos }: Props) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo)

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }
    const handleDone = (id: number) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))

    }
    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo)));
        setEdit(false)
    }
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        inputRef.current?.focus();
    }, [edit])
    return (
        <form onSubmit={(e) => handleEdit(e, todo.id)} className={` flex m-4 ml-4 w-[20rem] grid-cols-2 text-center p-6 h-[5rem] sm:w-[17rem] sm:grid-cols-2 md:w-[15rem] lg:ml-32 text-white rounded-lg justify-between bg-blue-950`}>
            {edit ? (
                <input ref={inputRef} value={editTodo} onChange={(e) => setEditTodo(e.target.value)} className='text-black outline-none' />
            ) : todo.isDone ? (
                <s className=''>{todo.todo}</s>
            ) : (
                <span className=''>{todo.todo}</span>
            )}
            <div className='flex w-15 justify-between'>
                <span className='' onClick={(e) => {
                    if (!edit && !todo.isDone) {
                        setEdit(!edit);
                    }
                }} ><TiEdit size={25} /></span>
                <span className='' onClick={(e) => handleDelete(todo.id)} ><RiDeleteBin6Fill size={25} /></span>
                <span className='' onClick={(e) => handleDone(todo.id)} ><MdDone size={25} /></span>
            </div>
        </form>

    )
}
export default SingleTodo
