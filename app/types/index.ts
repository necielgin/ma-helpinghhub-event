export default interface Event {
    id: string;
    event_title: string;
    event_description: string;
    event_location: string;
    address: string;
    latitude: number;
    longitude: number;
    category: string | null;
    event_start_time: string;
    event_end_time: string | null;
    status: string;
    max_volunteers: number;
    current_volunteers: number | null;
    registration_deadline: string;
    distance: number;
    organizer_id: string | null;
    organizer_name: string;
  }