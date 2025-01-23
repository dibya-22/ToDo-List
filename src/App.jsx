import { useState, useRef, useEffect } from 'react'
import './App.css'
import { v4 as uuidv4 } from 'uuid';
import Navbar from './components/Navbar'

function App() {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]); // its a container of todo
  const [showFinished, setShowFinished] = useState(false)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos")) 
      setTodos(todos)
    }
  }, [])

  const saveToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  

  const handleEdit = (id)=>{
    let t = todos.find(item => item.id === id);
    setTodo(t.todo)
    let newTodos = todos.filter(item=>{
      return item.id!==id
    });
    setTodos(newTodos);
    saveToLocalStorage();
  }
  
  const handleDelete = (id)=>{
    if(window.confirm("Are you sure you want to delete?")){
      let newTodos = todos.filter(item=>{
        return item.id!==id
      });
      setTodos(newTodos);
      saveToLocalStorage();
    }
  }
  
  const handleAdd = ()=>{
    if (todo.trim() === "") {
      alert("Please enter a valid task!");
      return;
    }
    setTodos([...todos, {id: uuidv4(), todo, isCompleted: false}]);
    setTodo("");
    saveToLocalStorage();
  }

  const handleChange = (e)=>  {
    setTodo(e.target.value);
  }
  
  const handleCheckbox = (e)=>  {
    let id = e.target.name;
    let index = todos.findIndex(item=>{
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !(newTodos[index].isCompleted);
    setTodos(newTodos);
    saveToLocalStorage();
  }

  const toggleFinish = () => {
    setShowFinished(!showFinished)
  }
  
  return (
    <>
      <Navbar/>
      <div className="container mx-auto my-5 rounded-2xl p-5 bg-blue-100 min-h-[80vh] md:w-[50%]">

        <h1 className='text-xl md:text-3xl font-extrabold my-2 md:my-5 text-center'>Taskly - Stay Organize in One Place</h1>

      <div className="addTodo flex gap-5 sticky top-20">
        <input onChange={handleChange} value={todo} type="text" placeholder='Add Task' className='bg-white rounded-full w-full px-3'/>
        <button onClick={handleAdd} disabled={todo.trim() === ""} className='bg-violet-600 hover:bg-violet-900 rounded-full px-5 py-3 text-3xl text-white cursor-pointer disabled:bg-gray-400'><span className="material-symbols-outlined ">add</span></button>
      </div>

      <div className="finished flex gap-2 my-5">
        <input onChange={toggleFinish} type="checkbox" checked={showFinished} id="" className='cursor-pointer'/>
        <span>Show Finished</span>
      </div>

      <h2 className='text-lg font-bold'>Your Tasks</h2>

      <div className="todos">
        {todos.length == 0 && <div className='text-9xl font-bold mx-auto opacity-10'>No Tasks</div>}
        {todos.map(item=>{
          return (showFinished || !item.isCompleted) && (
            <div key={item.id} className="todo flex items-center md:w-[70%] justify-between my-3">
              <div className="text flex gap-10">
                <input onChange={handleCheckbox} type="checkbox" name={item.id} checked={item.isCompleted} id="" className='cursor-pointer'/>
                <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
              </div>
              <div className="btns flex gap-3">
                <button onClick={()=>{handleEdit(item.id)}} className='bg-violet-600 hover:bg-violet-900 rounded-full px-2 py-0.5 text-3xl text-white cursor-pointer'><span className="material-symbols-outlined ">Edit</span></button>
                <button onClick={()=>{handleDelete(item.id)}} className='bg-violet-600 hover:bg-violet-900 rounded-full px-2 py-0.5 text-3xl text-white cursor-pointer'><span className="material-symbols-outlined ">Delete</span></button>
              </div>
          </div>
          )
        })}
        
      </div>

      </div>
    </>
  )
}

export default App
