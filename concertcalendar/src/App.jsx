import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import EventList from './components/EventList';
import Footer from './components/Footer';
import { getConcerts } from './services/api';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        date: '',
        zip: ''
      },
      eventData: []
    }
  }
  resetForm = () => {
    this.setState({
      formData: {
        date: '',
        zip: ''
      }
    })
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }))
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const { date, zip } = this.state.formData;
    this.props.history.push("/eventlist")
    const eventData = await getConcerts(date, zip);
    if (eventData) {
      this.setState({
        eventData: eventData.events
      })
      console.log(eventData.events);
    } else {
      this.setState({
        eventData: null
      })
      console.log('no events, sorry!')
    }
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1>Concert Calendar</h1>
          <Link to="/" onClick={this.resetForm}>Home</Link>
        </header>
        <main>
          <Route exact path="/" render={() => <Home
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            formData={this.state.formData} />} />
          <Route path="/eventlist" render={() =>
            <EventList
              eventData={this.state.eventData} />} />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default withRouter(App);
