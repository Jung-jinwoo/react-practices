import React, { useState } from "react";
import TaskList from "./TaskList";
import styles from './assets/scss/Card.scss';

export default function({title, description, tasks, status}) {
    const [showDetails, setShowDetatils] = useState('');
    const styleSideColor = {
        posotion: 'absolute',
        zindex: -1,
        top: 0,
        left: 0,
        width: 3,
        backgroundColor: status === 'Doing' ? '#bb8D31' : (status === 'ToDo' ? '#3a7e28' : '#222')
    }

    return(
        <div className={styles.Card}>
            <div style={styleSideColor} />
            <div className={styles.Card__Title}>{title}</div>
            <div className={styles.Card__Details}>
                {description}
            </div>
            <TaskList tasks={tasks} />
        </div>
    );
}