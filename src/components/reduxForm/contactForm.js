import React from 'react';
import { Field, reduxForm } from 'redux-form';

const required = value => value ? undefined : 'Required';
// const maxLength = max => value =>
//   value && value.length > max ? `Must be ${max} characters or less` : undefined;
const lengthBetween = (min, max) => value => 
  value && (value.length <= min || value.length >= max) ? `Must be between ${min} to ${max}` : undefined;
// const maxLength15 = maxLength(15);
// const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;
// const minValue = min => value =>
//   value && value < min ? `Must be at least ${min}` : undefined;
// const minValue18 = minValue(18);
const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined;
// const tooOld = value =>
//   value && value > 65 ? 'You might be too old for this' : undefined;


const renderField = ({ input, label, type, className, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input className={className} {...input} placeholder={label} type={type}/>
      {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span className="text-warning">{warning}</span>))}
    </div>
  </div>
)

let ContactForm = props => {
  const { handleSubmit, submitting } = props
  return (
    <React.Fragment>
        <h3 className="title">Contact Form</h3>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <Field 
                  type="text" 
                  value="" 
                  id="email" 
                  name="email" 
                  label="Email address"
                  component={renderField} 
                  validate={[email, required]}
                  className="form-control" />
            </div>
            <div className="form-group">
                <Field 
                  type="password" 
                  component={renderField}
                  name="password" 
                  label="Password"
                  validate={[required, lengthBetween(8, 12)]}
                  className="form-control" 
                  id="password" />
            </div>
            <div className="form-group form-check">
                <Field 
                  type="checkbox" 
                  name="check" 
                  component={renderField}
                  className="form-check-input" 
                  id="check" />
                <label className="form-check-label" htmlFor="check">Check me out</label>
            </div>
            <button type="submit" disabled={submitting} className="btn btn-light">Submit</button>
        </form>
    </React.Fragment>
  )
}

ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ContactForm)

export default ContactForm