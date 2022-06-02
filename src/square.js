import React from "react";
import ReactDOM from "react-dom";
import "./index.css"

export class Square extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e) {
        let letter = e.target.value;
        
        this.props.onClick(letter)
    }
    render() {
        return (
            <div id="gameBoard">
            <button onClick={this.handleClick} value="L" id="square1">L</button>
            <button onClick={this.handleClick} value="G" id="square2">G</button>
            <button onClick={this.handleClick} value="R" id="square3">R</button>
            <button onClick={this.handleClick} value="A" id="square4">A</button>
            <button onClick={this.handleClick} value="B" id="square5">B</button>
            <button onClick={this.handleClick} value="D" id="square6">D</button>
            <button onClick={this.handleClick} value="E" id="square7">E</button>
            <button onClick={this.handleClick} value="N" id="square8">N</button>
            <button onClick={this.handleClick} value="O" id="square9">O</button>
            </div>
        )
    }
}