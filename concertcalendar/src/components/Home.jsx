import React from 'react';
import Welcome from './Welcome';
import Form from './Form';

const Home = (props) => {
  return (
    <>
      <Welcome />
      <Form
        handleSubmit={props.handleSubmit}
        handleChange={props.handleChange}
        formData={props.formData} />
    </>
  )
}

export default Home;