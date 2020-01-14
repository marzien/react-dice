import React, { Component } from 'react';
import "./Die.css"

class Die extends Component { 
    render() { 
        return (
            <div>
                <i className={`Die fas fa-dice-${this.props.score} fa-6x 
                ${this.props.rolling && 'shaking'}`}></i>
            </div>
        );
    }
}
 
export default Die;