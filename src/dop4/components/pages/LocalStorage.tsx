import React, {useState} from 'react';

export const LocalStorage = () => {
    type TaskType = {
        id: number
        title: string
    }
    type CustomType = TaskType & {
        isDone: boolean
    }
    const tasks: CustomType[] = [
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'React', isDone: false},
    ]

    const [currentTasks, setCurrentTasks] = useState<CustomType[]>([])

    const saveTodo = () => {
        const stateAsString = JSON.stringify(tasks)
        localStorage.setItem('taskKey', stateAsString)
    }

    const onExtraTodo = () => {
        const stateAsString = localStorage.getItem('taskKey')
        if (stateAsString !== null) {
            setCurrentTasks(JSON.parse(stateAsString))
        }
    }

    const removeTasks = () => {
        localStorage.removeItem('taskKey')
        setCurrentTasks([])
    }

    return (
        <div>
            <button onClick={saveTodo}>Save</button>
            <button onClick={onExtraTodo}>Extra</button>
            <button onClick={removeTasks}>Delete</button>
            <ul>
                {
                    currentTasks.length
                        ? currentTasks.map(el => {
                            return (
                                <li key={el.id}>
                                    <span>{el.id}</span>
                                    <span>{el.title}</span>
                                    <input type="checkbox" checked={el.isDone}/>
                                </li>
                            )
                        })
                        : <div></div>
                }

            </ul>
        </div>
    );
};
