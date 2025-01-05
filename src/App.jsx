import React, { useRef, useState } from 'react'
import './App.css'
import { MdDeleteForever } from "react-icons/md";

const App = () => {

  const [data, setData] = useState([])

  const inputRef = useRef(null)

  const handleSubmit = () => {
    const inputValue = inputRef.current.value;
  if (inputValue === "") {
    alert('Please enter a value');
  } else {
    setData([...data, inputValue]);
  }
  inputRef.current.value = '';  
};

const handleRemoveItem = (indexToRemove) => {
    const updatedData = data.filter((item, index) => index !== indexToRemove);
    console.log(indexToRemove)
    setData(updatedData);
  };

  return (
    <div className='todo'>
      <div className='todo-container'>
        <h1>Todo List</h1>
      <div className='input-container'>
     <input ref={inputRef} type="text" className='todo-input' placeholder='Add Your Task' onKeyDown={(e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  }} />
      <div type='submit' className='todo-add-btn' onClick={handleSubmit}>Submit</div>
      </div>
      <ul className='todo-list'>
      {data.map((item, index) => (
        <li>
          <li className="todo-list-items"key={index} >
      {item}
      <MdDeleteForever className="clear-button"  onClick={() => handleRemoveItem(index)} />
    </li>
    </li>
        ))}
        
      </ul>
      </div>
      
    </div>
  )
}

export default App
