import React from 'react';
import EventTable from './components/EventTable';
import EventsForm from './EventsForm';


function EventPage() {
    return (
      <div>
        <h1>Event Page</h1>
        <EventTable />
        <EventsForm />
      </div>
    );
  }

  export default EventPage;
