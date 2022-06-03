import React from "react";
import './index.css';

export class Delete extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <button onClick={this.props.onClick} id="delete">Del</button>
        )
    }
}