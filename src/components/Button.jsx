import React from 'react';

export default function Button({ color, step, handleClick }) {
    return (
        <button className={`w-25 mt-4 btn btn-${color}`} onClick={(e) => handleClick(step)}>Submit</button>
        
    );
};
