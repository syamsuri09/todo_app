import React, { useRef, useState } from 'react'
import './App.css'

const App = () => {

  const [data, setData] = useState([])

  const inputRef = useRef(null)

  const handleSubmit = () => {
    const inputValue = inputRef.current.value;
  // Check if the input value is empty
  if (inputValue === "") {
    alert('Please enter a value');
  } else {
    setData([...data, inputValue]);
  }

    inputRef.current.value = '';  // Clear the input field
};

const handleRemoveItem = (indexToRemove) => {
    // Remove item at the specified index
    const updatedData = data.filter((item, index) => index !== indexToRemove);
    console.log(indexToRemove)
    setData(updatedData);
  };

  return (
    <div className='todo'>
      <div className='todo-container'>
        <h1>Todo List</h1>
      <div className='input-container'>
     <input ref={inputRef} type="text" className='todo-input' placeholder='Add Your Task' />
      <div type='submit' className='todo-add-btn' onClick={handleSubmit}>Submit</div>
      </div>
      <ul>
      {data.map((item, index) => (
          <li key={index} onClick={() => handleRemoveItem(index)}>
            {item}
          </li>
        ))}
      </ul>
      </div>
      
    </div>
  )
}

export default App
