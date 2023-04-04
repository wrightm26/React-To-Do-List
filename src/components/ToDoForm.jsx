import React, { useState } from 'react';

function ToDoForm(){
    const [task, setTask] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

    };

    return (
        <form>
            <input
            type="text"
            placeholder="New Task"
            value={task}
            name="text"
            className="todo-input"
            onChange={(e) => setTask(e.target.value)}
            />

        </form>
    );
};

export default ToDoForm;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);
