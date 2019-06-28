import React from 'react';

const EventList = (props) => {
  return (
    <div id='event-list'>
      <h2>Concerts:</h2>
      {props.eventData ?
        props.eventData.map(event => (
          <div className='event' key={event.id}>
            <h3>{event.name}</h3>
            <p>Location: {event._embedded.venues[0].name}</p>
            <button>Add to calendar</button>
          </div>
        )) : <h3>No concerts available in your area on that date, sorry!</h3>}
    </div>
  )
}

export default EventList;