import React from 'react';
import './App.css';
import {Todolist} from "./ToDoList";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

function App() {
    const tasks: Array<TaskType> = [
        {id: 1, title: "Таска1", isDone: true},
        {id: 2, title: "Таска2", isDone: false},
        {id: 3, title: "Таска3", isDone: true}
    ]

    return (
        <div className="App">
            <Todolist title="Туду1" tasks={tasks}/>
        </div>
    );
}

export default App;
