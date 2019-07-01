import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import EventList from './components/EventList';
import Footer from './components/Footer';
import AllEvents from './components/AllEvents';
import { format } from 'date-fns';
import { getConcerts } from './services/api';
import Calendar from './components/Calendar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        city: ''
      },
      eventData: [],
      savedEvents: [],
      selectedDate: new Date()
    }
  }

  onDateClick = async (day) => {
    this.setState({
      selectedDate: day
    });
    const city = this.state.formData.city;
    const date = format(this.state.selectedDate, "YYYY-MM-DD")
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
    }
  };

  saveEvent = (id) => {
    this.setState(prevState => ({
      savedEvents: [...prevState.savedEvents, id]
    }))
  }
  resetForm = () => {
    this.setState({
      formData: {
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
    this.props.history.push("/calendar")
  }
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => <Home
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          formData={this.state.formData}
          resetForm={this.resetForm} />} />
        <Route path="/calendar" render={() =>
          <Calendar
            selectedDate={this.state.selectedDate}
            onDateClick={this.onDateClick} />} />
        <Route path="/eventlist" render={() =>
          <EventList
            eventData={this.state.eventData}
            saveEvent={this.saveEvent} />} />
        <Route path="/allevents" render={() =>
          <AllEvents
            savedEvents={this.state.savedEvents} />} />
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default withRouter(App);
