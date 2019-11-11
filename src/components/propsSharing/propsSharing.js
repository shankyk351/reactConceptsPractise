import React, { Component } from 'react';

import Parent from './parent';

class PropsSharing extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <h3 className="title">Props Sharing</h3>
                <Parent />

            </>
         );
    }
}
 
export default PropsSharing;