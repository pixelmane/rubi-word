import React from "react";
import './index.css';

export class Erase extends React.Component {
    render() {
        return (
            <button id="erase" onClick={this.props.onClick}>Clear Guess</button>
        )
    }
}