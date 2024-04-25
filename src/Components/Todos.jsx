import React from 'react'
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Fill } from "react-icons/ri";

function Todos() {
    return (
        <div className='relative w-3/4 h-auto pb-5 bg-slate-50 rounded-lg mx-auto flex flex-col '>
            <h1 className='font-bold text-lg p-5'>Todo List</h1>
            <div className='px-5'>
                <button className="bg-green-700 py-1 px-2 rounded-md text-white text-sm hover:bg-green-800 shadow-md  shadow-green-200">Show Finished</button>
            </div>
            <div className='bg-gray-100 mt-5 h-10 flex text-gray-500'>
                <ul className='grid grid-cols-4 w-full'>
                    <li className='col-span-2 flex items-center pl-10'>List</li>
                    <li className='flex items-center justify-center'>Edit</li>
                    <li className='flex items-center justify-center'>Delete</li>
                </ul>
            </div>
            <div className='flex items-center justify-center'>
                <input type="checkbox" className="ml-3" />
                <div className="todos p-5 pl-3 grid grid-cols-4 w-full">
                    <div className='col-span-2 flex items-center'>Go to gym</div>
                    <div className="edit pr-1 text-red-400 hover:text-red-500 flex items-center justify-center cursor-pointer"><CiEdit size={24} /></div>
                    <div className="delete text-red-400 hover:text-red-500 flex items-center justify-center pl-7 cursor-pointer"><RiDeleteBin5Fill size={24} /></div>
                </div>
            </div>
        </div>
    )
}

export default Todos
