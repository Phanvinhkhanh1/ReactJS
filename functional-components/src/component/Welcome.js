import React, { Component } from "react";

class Welcome extends Component {
    render() {
        const { name, job } = this.props;
        return <h1>This is {name} job is {job}</h1>
    }
}

export default Welcome