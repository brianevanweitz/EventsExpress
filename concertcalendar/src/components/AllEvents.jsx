import React from 'react';
import { ticketLinks } from '/Users/brianweitz/pandas/part2/project2/concert-calendar/concertcalendar/src/services/api.js'
import { format, compareAsc } from 'date-fns';

class AllEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
  }
  getSavedEvents = async () => {
    const id = this.props.savedEvents.join();
    const result = await ticketLinks(id);
    return result;
  }
  async componentDidMount() {
    const events = await this.getSavedEvents()
    this.setState({
      events: events
    })
  }
  render() {
    return (
      <>
        <h1>Saved Events:</h1>
        <div id="saved-events">
          {this.props.savedEvents.length === 0 ?
            <p>You have not added any events yet.</p> :
            this.state.events.map(event => (
              <div key={event.id}>
                <h2>{event.name}</h2>
                <p>Location: {event._embedded.venues[0].name}</p>
                <p>Date: {format(event.dates.start.localDate, "MM/DD/YYYY")}</p>
                <a href={event.url}><button>Ticket Link</button></a>
              </div>
            ))
          }
        </div>
      </>
    )
  }
}
export default AllEvents;