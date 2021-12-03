import React from "react";
import Task from './Task';
import styles from './assets/css/TaskList.css';

export default function({tasks}) {
    return(
        <div className={styles.TaskList}>
            <ul>
                {tasks.map((task) => <Task key={tasks.no} name={tasks.name}/>)}
            </ul>
        </div>
    );
}