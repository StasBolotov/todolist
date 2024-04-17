import React from "react";

type TasksType = {
    id: number
    title: string
    isDone: boolean
}
type PropsType = {
    title: string
    tasks: TasksType[]
    data?: string
}
export const ToDoList = ({title, tasks, data}: PropsType) => {
    return (
        <div className="App">
            <div>
                <h3>{title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {/*<li><input type="checkbox" checked={tasks[0].isDone}/> <span>{tasks[0].title}</span></li>*/}
                    {/*<li><input type="checkbox" checked={tasks[1].isDone}/> <span>{tasks[1].title}</span></li>*/}
                    {/*<li><input type="checkbox" checked={tasks[2].isDone}/> <span>{tasks[2].title}</span></li>*/}
                    {tasks.map(task => {
                        return (
                            <li key={task.id}>
                                <input type="checkbox" checked={task.isDone}/>
                                <span>{task.title}</span>
                            </li>
                        )
                    })}
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
                <div>{data}</div>
            </div>
        </div>
    )
}