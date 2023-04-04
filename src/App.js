import React, { useState } from 'react';
import ToDoForm from './components/ToDoForm';
import Navbar from './components/Navbar';
import Button from './components/Button';


function App() {
    let name = 'Mickel';

    let button = [{color: 'success', step: 1}];

    const [count, setCount] = useState(0);

    function increaseCount(step){
      setCount(count + step);
    }

  return (
    <div className="App">
      <Navbar username={name}/>
      <div className="row text-center justify-content-center">
        <div className='mt-5 mb-3'>
          {count > 5 ? <h1>Don't get ahead of yourself {name}!</h1> : <h1>Way to Prioritize {name}!</h1>}

        </div>

        <ToDoForm/>

        {button.map(buttons => <Button key={buttons.step} color={buttons.color} step={buttons.step} handleClick={increaseCount}/> )}
      </div>
    </div>
  );
}

export default App;
