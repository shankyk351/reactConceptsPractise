import React from 'react';
// import logo from './logo.svg';
import './App.css';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import ReduxForm from './components/reduxForm/reduxForm';
import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom';

import HOC from './components/HOC/HOC';
import Counter from './components/counter/counter';
import PropsSharing from './components/propsSharing/propsSharing';
import Ref from './components/ref/ref';



// import Button from 'react-bootstrap/Button';

class App extends React.Component {

  submitForm = values => {
    // print the form values to the console
    console.log(values)
  }

  render(){
    return (
      <div className="App">
        <div className="routing">
          <Router>
            <ul className="routing-list">
              <li>
                <NavLink activeClassName="active" to="/ReduxForm">Redux Form</NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/HOC">HOC</NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/counter">State Management using Redux</NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/propsSharing">Props Sharing</NavLink>
              </li>
              <li>  
                <NavLink activeClassName="active" to="/ref">Refs</NavLink>
              </li>
            </ul>
            
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-6">
                    <Route path="/ReduxForm" component={ReduxForm} />
                </div>
              </div>
              <Route path="/HOC" component={HOC} />
              <Route path="/counter" component={Counter} />
              <Route path="/propsSharing" component={PropsSharing} />
              <Route path="/ref" component={Ref} />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
