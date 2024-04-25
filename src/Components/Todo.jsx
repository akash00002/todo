import React from 'react'

function Todo() {
    

    return (
        <div className='relative z-10 w-3/4 h-40 bg-slate-50 rounded-lg mx-auto flex flex-col items-center justify-center'>
            <input onChange={handleChange} value={todo} className='w-1/2 h-8 bg-slate-50 focus:outline-none placeholder:text-gray-500' type="text" placeholder='What would you like to do?' />
            <div className="bg-black h-px w-1/2"></div>

            <button onClick={handleAdd} disabled={todo.length <= 3} type='submit' className="add w-36 h-8 text-center rounded-md text-white bg-red-400 shadow-lg -ml-4 mb-4 shadow-red-300 my-4 hover:bg-red-500">Add</button>
        </div>
    )
}

export default Todo
