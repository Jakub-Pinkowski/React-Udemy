import { Suspense } from 'react'
import { useLoaderData, json, defer, Await } from 'react-router-dom'
import EventsList from '../components/EventsList'

const eventsUrl = 'http://localhost:8080/events'

function EventsPage() {
    const { events } = useLoaderData()

    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Await resolve={events}>{(events) => <EventsList events={events} />}</Await>
        </Suspense>
    )
}

export default EventsPage

async function loadEvents() {
    const response = await fetch(eventsUrl)

    if (!response.ok) {
        throw json({ message: 'Could not fetch events' }, { status: 500 })
    } else {
        const resData = await response.json()
        const events = resData.events
        return events
    }
}

export function loader() {
    return defer({
        events: loadEvents(),
    })
}
