
import { create } from "zustand";
import axios from "axios";
import Event from "../types/index";

interface EventData{
    events: Event[];
    count: number;
}

interface EventsState{
    data: EventData | null ;
    loading: boolean;
    error: string | null;
    fetchEvents: (query: string) => Promise<void>;
}


export const useEventsStore = create<EventsState>((set) => ({
    data: null,
    loading: false,
    error: null,


    fetchEvents: async (query) => {
        try {
            set({ loading: true, error: null });
            const response = await axios.get("https://helpinghhub-event.onrender.com/api/events?location="+query, {
                headers:{
                    "x-api-key": 'FJKJ2j8xDPrRyFmP93nhBWOL4LRMp5XZeDHC3caPAKpv1UycNcgSVEs2nW1gOiAx'
                }
            });
            console.log(response.data)
            if (response.status !== 200) {
                throw new Error('Failed to fetch events');
              }
            set({ data: response.data, loading: false });
        } catch (error) {
            set({ error: "Failed to fetch events: " + error, loading: false  });
        }
        set({ loading: false });
    }
}));