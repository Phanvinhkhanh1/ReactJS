import React from 'react';

// function Greet() {
//     return <h1>Hello Phan Vinh Khanh</h1>;
// }

const Greet = ({ name, job }) => {
    return (
        <div>
            <h1>Hello {name} job is {job}</h1>
            {/* {props.children} */}
        </div>
    )
};
export default Greet;