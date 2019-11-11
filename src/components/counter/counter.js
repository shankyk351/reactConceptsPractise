import React, { Component } from 'react';

import { connect } from 'react-redux';
import { incrementCounterAction, decrementCounterAction } from '../../actions/index'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <div className="counter-container">
                <h3 className="title text-center">Counter</h3>
                <div className="counter-value-container">
                    <h3 className="counter-value">{this.props.counterReducer}</h3>
                </div>
                <button onClick={()=>this.props.incrementCounterAction(1)}>+ Increment</button>
                <button onClick={()=>this.props.decrementCounterAction(1)}>- Decrement</button>
            </div>
         );
    }
}

const mapDispatchToProps = {
    incrementCounterAction,
    decrementCounterAction
}

const mapStateToProps = (state)=>{
    return state;
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Counter);