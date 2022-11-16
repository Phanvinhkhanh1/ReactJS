import React, { Component } from 'react';

export class EventBinding extends Component {
    constructor() {
        super();
        this.state = {
            message: "Hello Phan Vinh Khanh"
        }

        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        this.setState({
            message: "You are the best Programmer in the World"
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        );
    }
}

export default EventBinding;
