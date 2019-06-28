import React from 'react';

const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label htmlFor='date'>Enter date (format: YYYY-MM-DD)</label>
      <input type='text' id='date' name='date' value={props.formData.date} onChange={props.handleChange} />
      <label>Enter your city</label>
      <input type='text' id='city' name='city' value={props.formData.city} onChange={props.handleChange} />
      <input type='submit' value='Find events!' />
    </form>
  )
}

export default Form;