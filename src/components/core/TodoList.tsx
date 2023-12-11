/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { Todo } from '../../Interfaces/Interface'
import SingleTodo from './SingleTodo';


interface Props{
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;

}
const TodoList:React.FC<Props> = ({todos, setTodos}) => {
  return <div className="container grid sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3">
    {todos.map((todo,id)=>(
      <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}  />
    ))}
  </div>
  
}
export default TodoList;
