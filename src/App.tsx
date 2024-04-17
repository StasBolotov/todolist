import React from 'react';
import './App.css';
import {ToDoList} from "./ToDoList";

function App() {
    const task1 = [
        {id:1, title: 'HTML&CSS', isDone: true},
        {id:2, title: 'JS', isDone: false},
        {id:3, title: 'ReactJS', isDone: true},
        {id:4, title: 'Redux', isDone: true}
    ]
    const task2 = [
        {id:1, title: 'Hello world', isDone: false},
        {id:2, title: 'I am Happy', isDone: true},
        {id:3, title: 'Yo', isDone: false},
        {id:4, title: 'Redux', isDone: false}
    ]

    return (
        <div className="App">
            <ToDoList title="Задача1" tasks={task1} data={'17.04.2024'}/>
            <ToDoList title="Задача2" tasks={task2}/>
        </div>

    );
}

export default App;
