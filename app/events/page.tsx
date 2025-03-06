"use client"
import "../style/index.css";
import { useEffect } from "react"
import { useEventsStore } from "@/app/store/eventsStore";
import { useSearchParams } from "next/navigation";
import { Text, Box, VStack, Spinner, Stack } from "@chakra-ui/react"
import EventCard from "../components/EventCard"
import Event from "../types/index"

interface EventsData {
  count: number;
  events: Event[];
}

interface EventsStore {
  data: EventsData | null;
  fetchEvents: (location: string) => void;
  loading: boolean;
  error: string | null;
}

const EventsPage: React.FC = () => {
  const searchParams = useSearchParams();
  const location: string = searchParams.get("location") || ""; // Default to empty string
  const { data, fetchEvents, loading, error }: EventsStore = useEventsStore();
  
  useEffect(() => {
    if (location) {
      fetchEvents(location);
    }
  }, [location, fetchEvents]);
  
  return (
    <Box className="background-style-modified" bg="white" color="black" pb={8}>      
      {loading && (
        <VStack height={"100vh"}>
          <Text textStyle="3xl" fontWeight="bold" color="black">Loading events...</Text>
          <Spinner size="xl" color="black" />
        </VStack>
      )}
      
      {error && 
        <Text textStyle="3xl" fontWeight="bold" color="black" height={"100vh"} my={8}>
          There was an error loading the Events please refresh the page
        </Text>
      }
      
        {data && data.count > 0 ? (
          <>
          <Box color="grey" marginLeft={"7%"} marginRight={"7%"} gap="4" paddingBottom={"10px"}>
            <Text textStyle="3xl" fontWeight="bold" paddingTop={"5%"}>
              Find An Event
            </Text>
            <Text textStyle="lg" fontWeight="semi-bold" >
              Use filters to discover events that match your interests. Applying more filters will refine the results further. 
              The first 12 events will be displayed—click the &#34;View More&#34; button at the bottom of the page to load 12 additional events with each click.
            </Text>
          </Box>
          <Stack gap="4" direction="row" wrap="wrap" marginLeft={"25%"} pb={10} mb={10}>
          {data.events.map((event: Event, index: number) => 
            <EventCard key={index} event={event}/>)}
          </Stack>
          </>
        ) :null}
    
    </Box>
  );
}

export default EventsPage;