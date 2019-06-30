import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

class EventList extends React.Component {
  render() {
    return (
      <div id='event-list'>
        <header id="list-header">
          <h1>Events Express</h1>
          <Link to="/">Home</Link>
          <Link to="/allevents">Saved Events</Link>
        </header>
        <main id='list-main'>
          {this.props.eventData ?
            this.props.eventData.map(event => (
              <a className='event-changer' key={event.id}>
                <div className="event" onClick={() =>
                  this.props.saveEvent(event.id)}>
                  <h3>{event.name}</h3>
                  <p>Location: {event._embedded.venues[0].name}</p>
                  <p>Start time: {format(event.dates.start.dateTime, 'h:mm A')}</p>
                  <p className='add-event'>Add to calendar</p>
                </div>
              </a>
            )) : <h3>No events available in your area on that date, sorry!</h3>}
        </main>
      </div>
    )
  }
}

export default EventList;