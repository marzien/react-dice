import React, { Component } from 'react';
import './RollDice.css';
import Die from './Die';

class RollDice extends Component {
    static defaultProps = {
        score: ["one", "two", "three", "four", "five", "six"]
    }
    constructor(props) { 
        super(props);
        this.state = { dice1: "one", dice2: "one", rolling: false };
        this.roll = this.roll.bind(this)
    }
    roll() {
        const newDice1 = this.props.score[Math.floor(Math.random() * this.props.score.length)];
        const newDice2 = this.props.score[Math.floor(Math.random() * this.props.score.length)];
        this.setState({ dice1: newDice1, dice2: newDice2, rolling: true });

        setTimeout(() => {
            this.setState({ rolling: false })
        }, 1000)
    }
    render() { 
        return ( 
            <div className='RollDice'>
                <div className='RollDice-container'>
                    <Die score={this.state.dice1} rolling={this.state.rolling} />
                    <Die score={this.state.dice2} rolling={this.state.rolling}/>
                </div>
                <button onClick={this.roll} disabled={this.state.rolling}>
                    {this.state.rolling ? "Rolling..." : "Roll DIce!"}
                </button>
            </div>
        );
    }
}
 
export default RollDice;