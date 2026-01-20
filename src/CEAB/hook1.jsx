import React, { useState } from "react";
import {use} from "react";
export default function Hook1Example() {
    const [count, setCount] = useState(0);
    const [checked, setChecked] = useState(true);
    const [name, setName] = useState("guest");
    return (
        <div>
            <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <h1>Name: {name}</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}  />
        {""}
        </div>
    );
}



