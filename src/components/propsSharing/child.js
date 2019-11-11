import React, { Component } from 'react';

class Child extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            childData: ''
         }
    }
    render() { 
        return ( 
            <div className="prop-data-container">
                <h3>Child</h3>
                <div className="form-group">
                    <label htmlFor="">Data to Parent</label>
                    <input type="text" className="form-control" onKeyUp={(e)=>{this.props.childHandler(e.target.value)}} placeholder="Enter text here..." />
                </div>
                <h4>Data from parent : {this.props.parentData}</h4>
            </div>
         );
    }
}
 
export default Child;