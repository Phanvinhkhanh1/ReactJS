import React from 'react';

// function Greet() {
//     return <h1>Hello Phan Vinh Khanh</h1>;
// }

const Greet = (props) => {
    return (
        <div>
            <h1>Hello {props.name} job is {props.job}</h1>
            {props.children}
        </div>
    )
};
export default Greet;