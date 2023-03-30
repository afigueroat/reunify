

interface Event {
  event_id: number;
  event_name: string;
  event_description: string;
  event_location: string;
  event_date: string;
  event_time: string;
  user_name: string;
  event_type_id: string;
}

export interface CalendarEvent extends Event {}
