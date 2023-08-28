import { useState } from "react";

export default function InputForm({list, setList}){

    const [userInput, setUserInput] = useState("");

    const handleChange = (e) => {
        setUserInput(e.target.value);
    }

    return (
        <div>
            <p>Add a todo: </p>
            <form onSubmit={
                e => {
                    e.preventDefault();
                    let newToDo = {id: Math.random(), value: userInput};
                    setList([...list, newToDo]);
                    setUserInput("");
                }
            }>
                <input type="text" onChange={handleChange} value={userInput} required/>
                <button>Add</button>
            </form>
        </div>
    );
}