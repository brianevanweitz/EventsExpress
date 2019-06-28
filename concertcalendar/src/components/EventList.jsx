import React from 'react';

class EventList extends React.Component {
  render() {
    return (
      <div id='event-list'>
        <h2>Events:</h2>
        {this.props.eventData ?
          this.props.eventData.map(event => (
            <div className='event' key={event.id}>
              <h3>{event.name}</h3>
              <p>Location: {event._embedded.venues[0].name}</p>
              <button onClick={() => this.props.saveEvent(event.id)}
              >Add to calendar</button>
            </div>
          )) : <h3>No events available in your area on that date, sorry!</h3>}
      </div>
    )
  }
}

export default EventList;