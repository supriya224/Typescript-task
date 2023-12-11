/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { Todo } from '../../Interfaces/Interface'
import SingleTodo from './SingleTodo';
import { Droppable } from 'react-beautiful-dnd'


interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;

}
const TodoList: React.FC<Props> = ({ todos, setTodos, completedTodos, setCompletedTodos }) => {
  return (
    <div className="container grid sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3">
      <Droppable droppableId='TodosAdd'>
        {
          (provided,snapshot) => (
            <div className={`w-full bg-red-800 mb-3 ${snapshot.isDraggingOver?'dragactive':""}` } ref={provided.innerRef} {...provided.droppableProps}>
              <span>Active tasks</span>
              {todos.map((todo,index) => (
                <SingleTodo index={index} todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
              ))}
              {provided.placeholder}
            </div>
          )
        }

      </Droppable>

      <Droppable droppableId='TodosRemove'>
        {
          (provided,snapshot) => (
            <div className={`w-full bg-green-600 ${snapshot.isDraggingOver?'dragcomplete':""}`} ref={provided.innerRef} {...provided.droppableProps}>
              <span>completed tasks</span>
              {completedTodos.map((todo, index) => (
                <SingleTodo index={index} todo={todo} key={todo.id} todos={completedTodos} setTodos={setCompletedTodos} />
              ))}
            </div>
          )
        }

      </Droppable>
    </div>
  )
}
export default TodoList;
