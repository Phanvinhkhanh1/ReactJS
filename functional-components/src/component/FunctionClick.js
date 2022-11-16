import React from 'react';

function FunctionClick() {
    function clickHandler() {
        console.log('This is FunctionClick Handler')
    }

    return (
        <div>
            <button onClick={clickHandler}>Function Click</button>
        </div>
    );
}

export default FunctionClick;
