import React, { Component } from 'react';


var newData = {
    data: [
        {name: 'alex', profile: 'frontend developer'},
        {name: 'Jason', profile: 'ROR developer'},
        {name: 'Martin', profile: 'Content Writer'},
        {name: 'Ricky', profile: 'Python developer'}
    ],
 }
 
 var MyHOC = ComposedComponent => class extends Component {
    componentDidMount() {
       this.setState({
          data: newData.data
       });
    }
    render() {
       return <ComposedComponent {...this.props} {...this.state} />;
    }
 };


class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        const empData = this.props.data;
        return ( 
            <div>
                <h3 className="title">User Data</h3>
               <div className="table-responsive">
                <table className="table table-dark table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th>S. No.</th>
                            <th>Name</th>
                            <th>Profile</th>
                        </tr>
                    </thead>
                    <tbody>
                        {empData && empData.map((item, index)=>{
                            return (<tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.name}</td>
                                <td>{item.profile}</td>
                            </tr>)
                        })}
                    </tbody>
                </table>
               </div>
            </div>
         );
    }
}
 
export default MyHOC(MyComponent);