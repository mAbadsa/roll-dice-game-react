import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css'

class RollDice extends Component {
    static defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"]
    }
    constructor(props) {
        super(props)
        this.roll = this.roll.bind(this);
        this.state = {
            die1: "one",
            die2: "one"
        }
    }
    roll () {
        const randNum1 = Math.floor(Math.random() * this.props.sides.length);
        const randNum2 = Math.floor(Math.random() * this.props.sides.length);
        this.setState({
            die1: this.props.sides[randNum1],
            die2: this.props.sides[randNum2]
        })
    }
    render () {
        return (
            <div className="RollDice">
                <div className="Die-container">
                    <Die face={this.state.die1}/>
                    <Die face={this.state.die2}/>
                </div>
                <button className="roll-btn" onClick={this.roll}>Roll Dice!</button>
            </div>
        )
    }
}

export default RollDice;