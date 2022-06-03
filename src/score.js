import React from "react";
import './index.css';

export class Score extends React.Component {
    render() {
        return (<div id="statCont">
            <div id="scoreCont">
            <h4>Score:</h4>
            <h1>{this.props.value}</h1>
            </div>
            <div id="totalCont">
            <h4>Total Possible:</h4>
            <h1>{this.props.value}</h1>
            <h4>Total Possible:</h4>
            <h1>{this.props.value}</h1>
            </div>
            
            </div>
        )
    }
}