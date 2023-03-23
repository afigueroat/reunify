import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

const EventForm = () => {
  const [event, setEvent] = useState({
    event_name: '',
    event_type_id: '',
    event_date: '',
    event_time: '',
    event_location: '',
    event_description: '',
    user_id: '',
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await axios.post('/events', event)
      alert('Event created successfully')
      setEvent({
        event_name: '',
        event_type_id: '',
        event_date: '',
        event_time: '',
        event_location: '',
        event_description: '',
        user_id: '',
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEvent({ ...event, [e.target.name]: e.target.value })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="event_name">
        <Form.Label>Event Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter event name"
          name="event_name"
          value={event.event_name}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="event_type_id">
        <Form.Label>Event Type ID</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter event type ID"
          name="event_type_id"
          value={event.event_type_id}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="event_date">
        <Form.Label>Event Date</Form.Label>
        <Form.Control
          type="date"
          placeholder="Enter event date"
          name="event_date"
          value={event.event_date}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="event_time">
        <Form.Label>Event Time</Form.Label>
        <Form.Control
          type="time"
          placeholder="Enter event time"
          name="event_time"
          value={event.event_time}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="event_location">
        <Form.Label>Event Location</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter event location"
          name="event_location"
          value={event.event_location}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="event_description">
        <Form.Label>Event Description</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Enter event description"
          name="event_description"
          value={event.event_description}
          onChange={handleChange}
          rows={3}
        />
      </Form.Group>

      <Form.Group controlId="user_id">
        <Form.Label>User ID</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter user ID"
          name="user_id"
          value={event.user_id}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Create Event
      </Button>
    </Form>
  )
}

export default EventForm
