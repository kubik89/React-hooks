import React, {Component, useState} from 'react';

class Counter extends Component {

    state = {
        count: 0
    }

    increase = () => {
        // this.setState({count : this.state.count + 1})
        this.setState((prevState1) => ({
            count: prevState1.count + 1
        }))
    }

    render() {
        let {count} = this.state
        return (
            <div>
                <button onClick={this.increase}>Increase</button> <br/>
                <h1>{count}</h1>
            </div>
        );
    }
}

export default Counter;
