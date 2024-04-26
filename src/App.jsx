import { useState, useEffect } from 'react'
import './App.css'
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(false)

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])


  const saveToLocalStorage = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const toggleFinished = (e) => {
    setshowFinished(!showFinished)
  }

  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    setTodos(newTodos);
    saveToLocalStorage();
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id !== id;
    });
    let text = "Do you want to delete the Todo!\n\nEither OK or Cancel.";
    if (confirm(text) == true) {
      saveToLocalStorage();
      setTodos(newTodos);
    }
  }

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, iscompleted: false }])
    setTodo("")
    saveToLocalStorage();
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].iscompleted = !newTodos[index].iscompleted;
    setTodos(newTodos);
    saveToLocalStorage();
  }

  return (
    <>
      <div className="nav h-[180px]">
        <h1 className='text-center text-4xl text-white pb-6'>TODO List</h1>
        <div className='relative z-10 w-3/4 h-40 bg-slate-50 rounded-lg mx-auto flex flex-col items-center justify-center'>
          <input onChange={handleChange} value={todo} className='w-3/4 sm:w-1/2 h-8 bg-slate-50 focus:outline-none placeholder:text-gray-500' type="text" placeholder='What would you like to do?' />
          <div className="bg-black h-px w-3/4 sm:w-1/2"></div>

          <button onClick={handleAdd} disabled={todo.length <= 3} type='submit' className="cursor-pointer add w-36 h-8 text-center rounded-md text-white bg-red-400 shadow-lg -ml-4 mb-4 shadow-red-300 my-4 hover:bg-red-500">Add</button>
        </div>
      </div>
      <div className="content bg-violet-100 h-[81vh] md:h-[87vh] lg:h-[87vh] xl:h-[78vh] pt-[70px] pb-5">
        <div className='relative w-3/4 h-auto pb-5 bg-slate-50 rounded-lg mx-auto flex flex-col '>
          <h1 className='font-bold text-lg p-5'>Todo List</h1>
          <div className="px-5">
            <button onClick={toggleFinished} className={`py-1 px-2 rounded-md text-white text-sm hover:shadow-md ${showFinished ? 'bg-red-700 hover:bg-red-800' : 'bg-green-700 hover:bg-green-800'}`}>
              {showFinished ? 'Hide Finished' : 'Show Finished'}
            </button>
          </div>
          <div className='bg-gray-100 mt-5 h-10 flex text-gray-500'>
            <ul className='grid grid-cols-4 w-full'>
              <li className='col-span-2 flex items-center pl-10'>List</li>
              <li className='flex items-center justify-center'>Edit</li>
              <li className='flex items-center justify-center'>Delete</li>
            </ul>
          </div>
          <div className='flex items-center justify-center flex-col '>
            {todos.map(item => {
              return (showFinished || !item.iscompleted) && <div key={item.id} className='flex items-center w-full'>
                <input name={item.id} onChange={handleCheckbox} checked={item.iscompleted} type="checkbox" className="ml-3" />
                <div className="todos p-5 pl-3 grid grid-cols-4 w-full">
                  <div className='col-span-2 flex items-center'>
                    <div className={item.iscompleted ? "line-through" : ""}>{item.todo}</div>
                  </div>
                  <button onClick={(e) => handleEdit(e, item.id)} type='submit' className="edit pr-1 text-red-400 hover:text-red-500 flex items-center justify-center cursor-pointer"><CiEdit size={24} /></button>
                  <button onClick={(e) => { handleDelete(e, item.id) }} type='submit' className="delete text-red-400 hover:text-red-500 flex items-center justify-center pl-7 cursor-pointer"><RiDeleteBin5Fill size={24} /></button>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
