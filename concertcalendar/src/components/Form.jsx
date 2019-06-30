import React from 'react';

const Form = (props) => {
  return (
    <form id='form' onSubmit={props.handleSubmit}>
      <input className='home-form' type='text' id='date' name='date' placeholder="Enter date" value={props.formData.date} onChange={props.handleChange} />
      <input className='home-form' type='text' id='city' name='city' placeholder="Enter city" value={props.formData.city} onChange={props.handleChange} />
      <input id='go' type='submit' value='Find events!' />
    </form>
  )
}

export default Form;