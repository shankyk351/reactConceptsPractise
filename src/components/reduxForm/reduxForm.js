import React, { Component } from 'react';
import ContactForm from './contactForm';

class reduxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  handleSubmit = (val)=>{
    alert(JSON.stringify(val));
  }
  render() { 
    return ( 
      <div className="redux-form">
        <ContactForm onSubmit={this.handleSubmit} />
      </div>
     );
  }
}
 
export default reduxForm;