import React from 'react'
import { CalendarEvent } from './types'

interface EventCalendarProps {
  date: Date
  events: CalendarEvent[]
}

const EventCalendar: React.FC<EventCalendarProps> = ({ date, events }) => {
  const formattedDate = date.toISOString().slice(0, 10)
  const filteredEvents = events.filter(
    (event) => event.event_date === formattedDate
  )

  return (
    <div>
      <h2>Events for {date.toDateString()}</h2>
      {filteredEvents.length > 0 ? (
        <ul>
          {filteredEvents.map((event) => (
            <li key={event.event_id}>
              <h3>{event.event_name}</h3>
              <p>{event.event_description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No events for this day</p>
      )}
    </div>
  )
}

export default EventCalendar
