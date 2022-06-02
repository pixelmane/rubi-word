import React from "react";
import './index.css';

export class Alert extends React.Component {
    render() {
        return (
            <div id="alertCont">
            <div id="alert">{this.props.value}</div>
            </div>
        )
    }
}