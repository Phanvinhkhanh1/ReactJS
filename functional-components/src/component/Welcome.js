import React, { Component } from "react";

class Welcome extends Component {
    render() {
        return <h1>This is {this.props.name} job is {this.props.job}</h1>
    }
}

export default Welcome