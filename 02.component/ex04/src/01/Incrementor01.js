import React, { Component } from 'react';

export default class extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            step: this.props.step,
            val: this.props.begin
        }
    }

    onClickButton(e) {
        // this.state.value = this.state.value + this.props.step; -> 쓰지말기

        this.setState({
            val: this.state.val + this.state.step
        })
    }

    onClickButtonMinus(e) {
        // this.state.value = this.state.value + this.props.step; -> 쓰지말기

        this.setState({
            val: this.state.val - this.state.step
        })
    }

    render() {
        return (
            <div>
                <button onClick={ this.onClickButton.bind(this) }>
                    <strong>+</strong>
                </button>
                {' '}
                <span>{this.state.val}</span>
                {' '}
                <button onClick={ this.onClickButtonMinus.bind(this) }>
                    <strong>-</strong>
                </button>
            </div>
        );
    }
}