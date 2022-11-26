import React from 'react';
import '../styles/Form.css';
import {v4 as uuidv4} from "uuid";

const Form = ({input, setInput, todos, setTodos}) => {
    const onInputChange = (event) =>{
        setInput(event.target.value);
    }
    const onFormSubmit = (event) =>{
        event.preventDefault();
        setTodos([...todos, {id: uuidv4(), title: input, completed: false}]);
        setInput("");
    }
    return(
        <form className='form_container'onSubmit={onFormSubmit}>
             <input className='input_container ' type='text' placeholder='Enter a Todo...' value={input}
             required
             onChange={onInputChange} />
             <button className='add_button' type='submit'>Add</button>
        </form>
    )
}

export default Form;