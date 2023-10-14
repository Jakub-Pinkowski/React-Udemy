import { useLoaderData, json } from 'react-router-dom'
import EventsList from '../components/EventsList'

const eventsUlr = 'http://localhost:8080/events'

function EventsPage() {
    const data = useLoaderData()
    const events = data.events

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
        throw json({ message: 'Could not fetch events' }, { status: 500 })
    } else {
        return response
    }
}
