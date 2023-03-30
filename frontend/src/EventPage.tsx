import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import EventTable from './components/EventTable'
import CustomModal from './components/Modal'
import EventForm from './EventForm'

function EventPage() {
  const [showRegister, setShowRegister] = useState(false)
  const handleClose = () => setShowRegister(false)
  const handleShow = () => setShowRegister(true)

  return (
    <Container>
      <Row>
        <h1>Event Page</h1>
      </Row>
      <Row>
        <EventTable />
      </Row>
      <Row>
        <Col>
          <Button variant="primary" onClick={handleShow}>
            Create a new Event
          </Button>
        </Col>
      </Row>
      <div className="modal-container">
        <CustomModal
          showRegister={showRegister}
          handleClose={handleClose}
          title={'Create new Event'}
        >
          <EventForm />
        </CustomModal>
      </div>
      <style>{`
        .modal-container {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      `}</style>
    </Container>
  )
}

export default EventPage
