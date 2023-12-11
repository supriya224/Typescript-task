/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react"
import { InputField, TodoList } from "../../components/Index"
import { Todo } from "../../Interfaces/Interface";
import { DragDropContext, DropResult } from 'react-beautiful-dnd'

export const Home: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo(" ");
    }
  };

  const onDragEnd = (result: DropResult) => {
    const{source, destination}=result;
    if(!destination) return
    if(destination.droppableId=== source.droppableId && destination.index ===source.index)return;
    let add, 
    active= todos,
     complete= completedTodos;

     if(source.droppableId==='TodosList'){
      add=active[source.index];
      active.splice(source.index, 1)
     }else{
      add=active[source.index];
      active.splice(source.index, 1)
     }

     if(destination.droppableId==='TodosList'){
      active.splice(destination.index,0,add)
      active.splice(source.index, 1)
     }else{
      add=active[source.index];
      active.splice(source.index, 1)
     }  
     setCompletedTodos(complete)
     setTodos(active)
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className=" w-full h-screen bg-blue-300 text-center lg:w-full">
        <h1 className=" mt-9 text-xl text-white text-center font-bold">Typescript Todo Task</h1>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList todos={todos} setTodos={setTodos} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos} />
      </div>
    </DragDropContext>
  )
}