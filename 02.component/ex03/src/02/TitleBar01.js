import React, {Component} from 'react';

export default class TitelBar01 extends Component {

    constructor(){
        super(...arguments);
    }

    onClickHandler(){
        console.log("TitleBar01 clicked");
    }

    render() {
        return (
            <h1 
                onClick={this.onClickHander}
                style={{cursor: 'pointer'}}>
                ex03 - Function Event Handler(Class Component)
                {`np:${this.no}, stateno:${this.state.no}`}
            </h1>
        )
    }
}