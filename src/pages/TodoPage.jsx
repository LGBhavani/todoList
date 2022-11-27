import { useState, useEffect } from "react";
import Form from "../components/Form";
import TodosList from "../components/TodosList";

const TodoPage = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

    useEffect(() => {
        let data = window.localStorage.getItem('todoList');
        setTodos(JSON.parse(data));
    }, [])

    useEffect(() => {
        window.localStorage.setItem('todoList', JSON.stringify(todos))
    }, [todos])

  return (
    <div className="">

        <div>
          <Form
            input = {input}
            setInput = {setInput}
            todos = {todos}
            setTodos = {setTodos} 
          />
        </div>
        <div>
          <TodosList todos = {todos} setTodos = {setTodos} />
        </div>
      </div>

  );
};

export default TodoPage;
