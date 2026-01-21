import React,{useState} from "react";

export default function UseState3() {

    // ===== TODO LIST STATE =====
    const [todoList, setTodoList] = useState([]);
    const [todo, setTodo] = useState("");
    const [editIndex, setEditIndex] = useState(null);

    // ===== ADD TODO =====
    const addTodo = () => {
        if (todo === "") return;

        if (editIndex !== null) {
            // UPDATE TODO
            const updatedTodos = todoList.map((item, index) =>
                index === editIndex ? todo : item
            );
            setTodoList(updatedTodos);
            setEditIndex(null);
        } else {
            // ADD TODO
            setTodoList([...todoList, todo]);
        }
        setTodo("");
    };

    // ===== REMOVE TODO =====
    const removeTodo = (index) => {
        setTodoList(todoList.filter((_, i) => i !== index));
    };

    // ===== EDIT TODO =====
    const editTodo = (index) => {
        setTodo(todoList[index]);
        setEditIndex(index);
    };

    return (
        <>
            <h2>Todo List</h2>

            <input
                type="text"
                value={todo}
                placeholder="Enter todo"
                onChange={(e) => setTodo(e.target.value)}
            />

            <button onClick={addTodo}>
                {editIndex !== null ? "Update" : "Add"}
            </button>

            <ul>
                {todoList.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => editTodo(index)}>Edit</button>
                        <button onClick={() => removeTodo(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    );
}
