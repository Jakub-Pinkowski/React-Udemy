import { useLoaderData } from 'react-router-dom'
import EventsList from '../components/EventsList'

const eventsUlr = 'http://localhost:8080/eveasdasdnts'

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
    const response = await fetch(eventsUlr)

    if (response.status !== 200) {
        throw { message: 'Failed to fetch events' }
    } else {
        const events = response.data.events
        return events
    }
}
