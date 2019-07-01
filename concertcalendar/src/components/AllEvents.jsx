import React from 'react';
import { ticketLinks } from '/Users/brianweitz/pandas/part2/project2/concert-calendar/concertcalendar/src/services/api.js'
import { format, compareAsc } from 'date-fns';
import { Link } from 'react-router-dom';

class AllEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
  }
  getSavedEvents = async () => {
    const idArr = []
    this.props.savedEvents.map(event => {
      idArr.push(event.id);
    })
    const id = idArr.join();
    const result = await ticketLinks(id);
    return result;
  }
  async componentDidMount() {
    const events = await this.getSavedEvents()
    this.setState({
      events: events.sort((a, b) => a.dates.start.localDate - b.dates.start.localDate)
    })
  }
  render() {
    return (
      <div id="all-events">
        <header id="list-header">
          <h1>Events Express</h1>
          <Link to="/">Home</Link>
          <Link to="/allevents">Saved Events</Link>
        </header>
        <div id="saved-events">
          <h1>Saved Events:</h1>
          {this.props.savedEvents.length === 0 ?
            <p>You have not added any events yet.</p> :
            this.state.events.map(event => (
              <div key={event.id} className='event-store'>
                <h2>{event.name}</h2>
                <p>Location: {event._embedded.venues[0].name}</p>
                <p>Date: {format(event.dates.start.localDate, "MM/DD/YYYY")}</p>
                <a href={event.url} target="_blank"><button>Ticket Link</button></a>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}
export default AllEvents;