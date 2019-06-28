import React from 'react';

const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label htmlFor='date'>Enter date (format: YYYY-MM-DD)</label>
      <input type='text' id='date' name='date' value={props.formData.date} onChange={props.handleChange} />
      <label>Enter your zipcode</label>
      <input type='text' id='zip' name='zip' value={props.formData.zip} onChange={props.handleChange} />
      <input type='submit' value='Find concerts!' />
    </form>
  )
}

export default Form;