// import React from "react";
import {TaskType} from "./App";
import {Button} from "./Button";

type PropsType = {
    title: string
    tasks: TaskType[]
}



export const Todolist = (props: PropsType) => {

    const tasklist: Array<JSX.Element> = props.tasks.map(task => {
        return(
            <li>
                <input type="checkbox" checked={task.isDone}/>
                <span>{task.title}</span>
            </li>
        )
    })

    return (
        <div className="Todolist">
            <h3>{props.title}</h3>
            <div>
                <input/>
                <Button title="+"/>
            </div>
            <ul>
                {tasklist}
                {/*<li><input type="checkbox" checked={true}/> <span>HTML&CSS</span></li>*/}
                {/*<li><input type="checkbox" checked={true}/> <span>JS</span></li>*/}
                {/*<li><input type="checkbox" checked={false}/> <span>React</span></li>*/}
            </ul>
            <div>
                <Button title="All"/>
                <Button title="Active"/>
                <Button title="Completed"/>
            </div>
        </div>
    )
}