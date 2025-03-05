"use client"
import "../style/index.css";
import { useEffect } from "react"
import { useEventsStore } from "@/app/store/eventsStore";
import { useSearchParams } from "next/navigation";


export default function EventsPage() {
  const searchParams = useSearchParams();
  const location = searchParams.get("location") || ""; // Default to empty string
  const { data, fetchEvents, loading, error } = useEventsStore(); // Destructure the store
  
  useEffect(() => {
    if (location) {
      fetchEvents(location);
    }
  }, [location, fetchEvents]);
  
  return (
    <div className="background-style" style={{backgroundColor: "white", color: "black"}}>
      <h1>Events</h1>
      
      {loading && <p>Loading events...</p>}
      {error && <p>Error: {error}</p>}
      
      <ul>
        {data && data.count > 0 ? (
          data.events.map((event, index) => (
            <li key={index}>{event.event_title}</li>
          ))
        ) : (
          <p>No events found</p>
        )}
      </ul>
    </div>
  );
}