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
            die2: "one",
            rolling: false
        }
    }
    roll () {
        const randNum1 = Math.floor(Math.random() * this.props.sides.length);
        const randNum2 = Math.floor(Math.random() * this.props.sides.length);
        this.setState({
            die1: this.props.sides[randNum1],
            die2: this.props.sides[randNum2],
            rolling: true
        })
        setTimeout(() => {
            this.setState({rolling: false});
            document.getElementsByClassName('Die').addClass = "rolling";
        }, 750)
    }
    render () {
        return (
            <div className="RollDice">
                <div className="Die-container">
                    <Die face={this.state.die1} rolling={this.state.rolling}/>
                    <Die face={this.state.die2} rolling={this.state.rolling}/>
                </div>
                <button className="roll-btn" onClick={this.roll} disabled={this.state.rolling}>
                    {this.state.rolling ? "Rolling..." : "Roll Dice!"}
                </button>
            </div>
        )
    }
}

export default RollDice;