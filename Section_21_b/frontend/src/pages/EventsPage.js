import { useLoaderData } from 'react-router-dom'
import axios from 'axios'

import EventsList from '../components/EventsList'

const eventsUlr = 'http://localhost:8080/events'

function EventsPage() {
    const events = useLoaderData()

    return (
        <>
            <EventsList events={events} />
        </>
    )
}

export default EventsPage

export async function loader() {
    const response = await axios.get(eventsUlr)

    if (response.status !== 200) {
        throw new Error('Error loading events')
    } else {
        const events = response.data.events
        return events
    }
}
