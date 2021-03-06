import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number1: 0,
            number2: 0,
            result: 0,
            selector: ''
        }
    }
    
    handleOnChange = e => {
        const {target: {value, name, type}} = e;
        
        const val = type === 'text'? Number(value) : value;

        this.setState({
            [name]: val
        })
    }

    handleResult = e => {
        const {number1, number2, selector} = this.state;
        
        this.setState({
            result: (calculateResult(number1, number2, selector))
        })
    }

    render() {
        return (
            <div className= "Calculator">
                <input
                    onChange={this.handleOnChange}
                    name = "number1"
                    type = "text"
                    value = {this.state.number1}
                />
                
                <select name="selector" value={this.state.selector} onChange={this.handleOnChange}>
                    <option value="add">+</option>
                    <option value="sub">-</option>
                    <option value="mult">x</option>
                    <option value="div">/</option>
                </select>

                <input
                    onChange={this.handleOnChange}
                    name = "number2"
                    type = "text"
                    value = {this.state.number2}
                />
                <p>
                    <button onClick={this.handleResult}>=</button>
                </p>
                <p className="result">{this.state.result}</p>
            </div>
        );
    }
}

function calculateResult(number1, number2, selector) {
    switch (selector) {
        case "add":
            return number1 + number2;
            
        case "sub":
            return number1 - number2;
            
        case "mult":
            return number1 * number2;
            

            case "div":
        return (number1 / number2).toFixed(2);
         
    
        default:
            return number1 + number2
            
    }
}
export default Calculator;