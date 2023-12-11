/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;

}

const InputField:React.FC<Props> = ({ todo, setTodo }) => {
    return (
        <form className='flex m-2 justify-center items-center relative'>
            <input
                type='input'
                placeholder='Enter a task...'
                className='w-[20rem] m-2 p-5 pl-9 rounded-full shadow-inner shadow-black outline-none focus-visible:bg-blue-900 focus-visible:text-white' />
            <button className='absolute right-6 flex w-18 p-3 bg-blue-800 text-white font-bold rounded-full hover:bg-blue-600 shadow-md shadow-black  ' type='submit'>Go</button>
        </form>
    )
}
// focus-within:bg-blue-600
export default InputField;