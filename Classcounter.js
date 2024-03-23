import React, { Component } from "react";
export class Classcounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }
    incrementHandler = () => {
        this.setState({ count: this.state.count + 1 });
    }
    decrementHandler = () => {
        this.setState({ count: this.state.count - 1 });
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.incrementHandler}>Increment</button>
                <button onClick={this.decrementHandler}>Decrement</button>
            </div>
        );
    }
}
export default Classcounter;