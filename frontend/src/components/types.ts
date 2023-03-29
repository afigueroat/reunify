export interface EventType {
  id: number;
  name: string;
}

interface Event {
  event_id: number;
  event_name: string;
  event_description: string;
  event_location: string;
  event_date: string;
  event_time: string;
  user_name: string;
  event_type_id: EventType[];
}

export interface CalendarEvent extends Event {}
