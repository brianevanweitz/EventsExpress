import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        date: null,
        zipcode: null
      }
    }
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1>Concert Calendar</h1>
          <Link to="/">Home</Link>
        </header>
        <main>
          <Route exact path="/" render={() => <Home />} />
        </main>
        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
