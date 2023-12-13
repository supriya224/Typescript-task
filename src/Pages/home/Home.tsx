/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react"
import { InputField, TodoList } from "../../components/Index"
import { Todo } from "../../Interfaces/Interface";

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

  return (

    <div className=" w-full h-screen bg-blue-300 text-center lg:w-full">
      <h1 className=" mt-9 text-xl text-white text-center font-bold">Typescript Todo Task</h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos} />
    </div>

  )
}