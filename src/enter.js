import React from "react";
import './index.css';

export class Enter extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick} id="enter">Enter</button>
        )
    }
}