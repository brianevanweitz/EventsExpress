import React from 'react';
import Welcome from './Welcome';
import Form from './Form';
import { Link, Route } from 'react-router-dom';

const Home = (props) => {
  return (
    <div id='home'>
      <header id="home-header">
        <h1>Events Express</h1>
        <Link to="/" onClick={props.resetForm}>Home</Link>
        <Link to="/allevents">Saved Events</Link>
        <Welcome />
        <Form
          handleSubmit={props.handleSubmit}
          handleChange={props.handleChange}
          formData={props.formData} />
      </header>

    </div>
  )
}

export default Home;