import React, { Component } from 'react';

class Ref extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.state = {  }
    }

    focusInput(){
        this.inputRef.current.focus();
    }
    render() { 
        return ( 
            <div className="ref-container">
                <h3 className="title">Focus Input</h3>
                <div className="form-group">
                    <label htmlFor="">Focus</label>
                    <input type="text" ref={this.inputRef} className="form-control" />
                </div>
                <button className="btn btn-light" onClick={()=>this.focusInput()}>Focus Input</button>
            </div>
         );
    }
}
 
export default Ref;