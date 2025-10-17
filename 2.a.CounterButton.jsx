import React, { Component } from "react";
class CounterButton extends Component {
    constructor(){
        super();
        this.state = {
            count : 0,
        }
    }
    handleIncrement=()=> {
        this.setState( { count: this.state.count+1});
    }
    handleDecrement=()=>{
        this.setState({count : this.state.count-1});
    }
    render(){
        return(
            <div>
                <h1> Counting component</h1>
                <p> Count: {this.state.count}</p>
                <button onClick={this.handleIncrement}>Increment</button>
                <button onClick={this.handleDecrement}>Decrememt</button>
            </div>
        )
    }
}
export default CounterButton;