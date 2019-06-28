import React from 'react';

const Form = (props) => {
  return (
    <form id='form' onSubmit={props.handleSubmit}>
      <label htmlFor='date'>Enter date</label>
      <input className='home-form' type='text' id='date' name='date' value={props.formData.date} onChange={props.handleChange} />
      <label>Enter your city</label>
      <input className='home-form' type='text' id='city' name='city' value={props.formData.city} onChange={props.handleChange} />
      <input id='go' type='submit' value='Find events!' />
    </form>
  )
}

export default Form;