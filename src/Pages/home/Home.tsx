import { useState } from "react"
import { InputField } from "../../components/Index"

export const Home: React.FC=()=> {
const [todo, setTodo] =useState<string>("");

  return (
    <div className=" w-full h-screen bg-blue-300">
      <h1 className=" mt-9 text-xl text-white text-center font-bold">Typescript Todo Task</h1>
      <InputField todo={todo} setTodo={setTodo} />
    </div>
  )
}