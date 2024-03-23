import React, { Component } from "react";
class Clock extends Component {
    constructor() {
        super();
        this.state = { date: new Date() };
    }
    componentDidMount() {
        this.update = setInterval(() => {
            this.setState({ date: new Date() });
        }, 1 * 1000);
    }
    componentWillMount() {
        clearInterval(this.update);
    }
    render() {
        const { date } = this.state;
        return (
            <div>
                <h1>Digital Clock</h1>
                <h2>{date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}
export default Clock;
