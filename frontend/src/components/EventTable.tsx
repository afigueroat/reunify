import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

interface EventData {
    event_id: number;
    event_name: string;
    event_type_id: number;
    event_date: string;
    event_time: string;
    event_location: string;
    event_description: string | null;
    user_id: number;
  }
  
function EventTable() {
    const [events, setEvents] = useState<EventData[]>([]);

  useEffect(() => {
    axios.get('/api/events')
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const fields = [
    { key: 'event_name', label: 'Nombre del evento' },
    { key: 'event_type_id', label: 'Tipo de evento' },
    { key: 'event_date', label: 'Fecha del evento' },
    { key: 'event_time', label: 'Hora del evento' },
    { key: 'event_location', label: 'Ubicación del evento' },
    { key: 'event_description', label: 'Descripción del evento' },
    { key: 'user_id', label: 'ID del usuario' }
  ];

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            {fields.map(field => (
              <th key={field.key}>{field.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={event.event_id}>
              <td>{event.event_name}</td>
              <td>{event.event_type_id}</td>
              <td>{event.event_date}</td>
              <td>{event.event_time}</td>
              <td>{event.event_location}</td>
              <td>{event.event_description}</td>
              <td>{event.user_id}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default EventTable;
