import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import EventList from './components/EventList';
import Footer from './components/Footer';
import AllEvents from './components/AllEvents';
import { format } from 'date-fns';
import { getConcerts, ticketLinks } from './services/api';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        date: '',
        city: ''
      },
      eventData: [],
      savedEvents: []
    }
  }
  saveEvent = (id) => {
    this.setState(prevState => ({
      savedEvents: [...prevState.savedEvents, id]
    }))
  }
  resetForm = () => {
    this.setState({
      formData: {
        date: '',
        city: ''
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
    const city = this.state.formData.city;
    const date = format(this.state.formData.date, "YYYY-MM-DD")
    this.props.history.push("/eventlist")
    const eventData = await getConcerts(date, city);
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
          <h1>Events Express</h1>
          <Link to="/" onClick={this.resetForm}>Home</Link>
          <Link to="/allevents">Saved Events</Link>
        </header>
        <main>
          <Route exact path="/" render={() => <Home
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            formData={this.state.formData} />} />
          <Route path="/eventlist" render={() =>
            <EventList
              eventData={this.state.eventData}
              saveEvent={this.saveEvent} />} />
          <Route path="/allevents" render={() =>
            <AllEvents
              savedEvents={this.state.savedEvents} />} />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default withRouter(App);
