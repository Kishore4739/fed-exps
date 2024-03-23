import React, { Component } from "react";
class TextColorDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "#FF00FF",
        };
    }
    setRed = () => {
        this.setState({ color: "#FF0000" });
    };
    setGreen = () => {
        this.setState({ color: "#00FF00" });
    };
    setBlue = () => {
        this.setState({ color: "#0000FF" });
    };
    render() {
        return (
            <div>
                <h1 style={{ color: this.state.color }}>TextColorDemo</h1>
                <button onClick={this.setRed}>RED</button>&nbsp;&nbsp;&nbsp;
                <button onClick={this.setGreen}>GREEN</button>&nbsp;&nbsp;&nbsp;
                <button onClick={this.setBlue}>BLUE</button>
            </div>
        );
    }
}
export default TextColorDemo;