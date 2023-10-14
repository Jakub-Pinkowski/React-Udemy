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
        throw new Response(
            JSON.stringify({
                message: 'Failed to fetch events',
            }),
            {
                status: 500,
            }
        )
    } else {
        const events = response.data.events
        return events
    }
}
