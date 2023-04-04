import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import Button from './Button';

function ToDoList(){
    const [todoTask, addToDo] = useState([]);

    const addTask = todo => {
        const newTodoTask = [todo, ...todoTask]



    addToDo(newTodoTask);
    console.log(...todoTask)
    };
    return (
        <div>
            {button.map(buttons => <Button key={buttons.step} color={buttons.color} step={buttons.step} handleClick={increaseCount}/> )}
            <ToDoForm onSubmit={addTask} />
        </div>
    )
}
