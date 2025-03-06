
import { Card, Button } from "@chakra-ui/react"
import Event from "../types/index"

interface EventCardProps {
    event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) =>{
    const date = new Date(event.event_start_time);
    const formattedDate = new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric" }).format(date);

    return (
        <Card.Root width="300px" height="400px" variant={'subtle'} bg={"rgb(238, 230, 213)"} color="black">
            <Card.Body gap="2">
            <Card.Title mt="2">{event.event_title}</Card.Title>
            {formattedDate}
            <Card.Description>{event.event_description}</Card.Description>
            {event.organizer_name}
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
                <Button colorPalette="orange"
                    bg={{ base: "colorPalette.500", _hover: "colorPalette.700" }}>Sign Up</Button>
            </Card.Footer>
        </Card.Root>
)
}

export default EventCard;