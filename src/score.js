import React from "react";
import './index.css';

export class Score extends React.Component {
    render() {
        return (
            <h1>{this.props.value}</h1>
        )
    }
}