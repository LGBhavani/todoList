import React from 'react';
import '../styles/TodosList.scss';

const TodosList = ({todos, setTodos}) =>{

    const handleDelete =(id) =>{
        let isConfirm = window.confirm('Do you want to delete this task?');
        if(isConfirm){
            setTodos(todos.filter((todo) => todo.id!== id))
        }
    }
    const handleCompleted = (todo) => {
        setTodos(
            todos.map((item) =>{
                console.log("item", item);
                if(item.id === todo.id){
                    return{...item, completed: !item.completed}
                }
                return item;
            })
        )
    }

    console.log("todos", todos );
    return(
        <div className='todosList_container'>
            {todos.map((todo) => (
                 
                <li className='list_item' key={todo.id}>
                    <input 
                        type="text"
                        className='input_list_item'
                        value={todo.title}
                        onChange={(event) => event.preventDefault()}
                    />

                    <div className='buttons'>
                        <button className='button-complete task-button' onClick={() => handleCompleted(todo)}>
                            <i className={`fa ${todo.completed ? 'fa-check-circle task-complete' : 'fa-check-circle-o' } `}></i>
                        </button>
                        <button className='button-edit task-button'>
                            <i className='fa fa-edit'></i>
                        </button>
                        <button className='button-delete task-button' onClick={() => handleDelete(todo.id)}>
                            <i className='fa fa-trash'></i>
                        </button>
                    </div>
                </li>
            ))}
        </div>
    )
}

export default TodosList;