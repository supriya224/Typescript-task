/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef } from 'react'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <form onSubmit={(e) =>
            handleAdd(e)
        }
            className='flex m-2 justify-center items-center relative'>
            <input
                ref={inputRef}
                type='text'
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder='Enter a task...'
                className='w-[20rem] m-2 p-5 pl-9 rounded-full shadow-inner shadow-black outline-none xs:w-[30rem] sm:w-[45rem] md:w-[45rem] focus-visible:bg-blue-900 focus-visible:text-white' />
            <button className='absolute right-6 flex w-18 p-3 bg-blue-800 text-white font-bold rounded-full hover:bg-blue-600 shadow-md shadow-black md:relative md:right-1 lg:relative lg:-right-1  xl:relative xl:-right-1  ' type='submit'>Go</button>
        </form>
    )
}

export default InputField;