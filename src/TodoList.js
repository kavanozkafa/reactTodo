import React ,{useState} from "react";

const TodoList = () =>{
     const [todos,setTodos] = useState([]);
     const [todoInputValue,setTodoInputValue] = useState("")

    return <div>
        <ul>
            {todos.map((todo,index) => 
            <li onClick={() => 
                setTodos(todos => [...todos.slice(0,index),...todos.slice(index + 1)])
            } key={index}>{todo}</li>)}
        </ul>
        <input onKeyDown={evt => {
                if (evt.key === "Enter") {
                    setTodos(todos => [...todos, todoInputValue]);
                    setTodoInputValue("")
                }
            
        }} type="text" value={todoInputValue} onChange={evt => {
            setTodoInputValue(evt.target.value);
        }} />
    </div>;
};

export default TodoList;
