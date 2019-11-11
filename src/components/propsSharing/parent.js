import React, { Component } from 'react';

import Child from './child';

class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            parentData: '',
            childData: ''
         }
    }

    dataToChild(val){
        this.setState({
            parentData: val
        })
    }

    dataFromChild(val){
        this.setState({
            childData: val
        })
    }

    render() { 
        return ( 
            <>
                <div className="prop-data-container">
                    <h3>Parent</h3>
                    <div className="form-group">
                        <label htmlFor="">Data to Child</label>
                        <input type="text" className="form-control" onKeyUp={(e)=>{this.dataToChild(e.target.value)}} placeholder="Enter text here..." />
                    </div>
                    <h4>Data from child : {this.state.childData}</h4>
                </div>
                <Child parentData={this.state.parentData} childHandler={(e)=>this.dataFromChild(e)} />
            </>
         );
    }
}
 
export default Parent;