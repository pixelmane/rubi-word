import React from "react";
import { render } from "react-dom";
import './index.css';

export class Entry extends React.Component {
   
    render() {
        return (
            <div id="entry">{this.props.guess}</div>
        )
    }
}