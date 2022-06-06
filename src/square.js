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
                <div className="lineCont">
            <button onClick={this.handleClick} value="T" id="square1">T</button>
            <button onClick={this.handleClick} value="A" id="square3">A</button>
           </div>
           <div className="lineCont">
            <button onClick={this.handleClick} value="M" id="square4">M</button>
            <button onClick={this.handleClick} value="S" id="square5">S</button>
            <button onClick={this.handleClick} value="R" id="square6">R</button>
            </div>
            <div className="lineCont">
            <button onClick={this.handleClick} value="L" id="square7">L</button>
            <button onClick={this.handleClick} value="O" id="square9">O</button>
            </div>
            </div>
        )
    }
}