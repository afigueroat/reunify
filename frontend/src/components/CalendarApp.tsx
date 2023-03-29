import React, { useState, useEffect } from 'react'
import Calendar from './Calendar'
import { CalendarEvent, EventType } from './types'
import { Modal, Button } from 'react-bootstrap'

const CalendarApp: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date())
  const [events, setEvents] = useState<CalendarEvent[]>([])
  const [showModal, setShowModal] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null)

  const fetchEvents = () => {
    fetch('/api/events')
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    fetchEvents()
  }, [])

  const handleEventClick = (event: CalendarEvent) => {
    setSelectedEvent(event)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <div>
      <Calendar date={date} events={events} onEventClick={handleEventClick} />
      <Modal show={showModal} onHide={handleCloseModal}>
        {selectedEvent && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedEvent.event_name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Description: {selectedEvent.event_description}</p>
              <p>Location: {selectedEvent.event_location}</p>
              <p>Date: {selectedEvent.event_date}</p>
              <p>Time: {selectedEvent.event_time}</p>
              <p>User: {selectedEvent.user_name}</p>
              <p>
                Event Type:{' '}
                {selectedEvent.event_type_id
                  .map((eventType: EventType) => eventType.name)
                  .join(', ')}
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  )
}

export default CalendarApp
