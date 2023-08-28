import { useState } from "react"
import InputForm from "./InputForm"

export default function ToDo(){

    const [list, setList] = useState([{id: 0, value: "Hello1"}]);

    const handleDelete = (key) => () => {
        setList(list.filter(val => val.id !== key));
    }

    const handleModify = (id) => (e) => {
        const newList = list.map(val => {
            if(val.id === id){
                val.value = e.target.value;
            }
            return val;
        });
        setList(newList);
    }

    return (
        <>
            ToDo List:
            <InputForm list = {list} setList = {setList}/>
            <ul>
                {list.map(item => 
                <li style={{listStyle: "none"}} key={item.id}>
                    <input type="checkbox" onChange={handleDelete(item.id)}/>
                    <input className="toDo" value={item.value} onChange={handleModify(item.id)}/>
                </li>)}
            </ul>
        </>
    );

}