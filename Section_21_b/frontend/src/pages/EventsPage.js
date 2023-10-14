import { Suspense } from 'react'
import { useLoaderData, json, defer, Await } from 'react-router-dom'
import EventsList from '../components/EventsList'

const eventsUrl = 'http://localhost:8080/events'

function EventsPage() {
    const { events } = useLoaderData()

    console.log(events)

    return (
        <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
            <Await resolve={events}>{(loadedEvents) => <EventsList events={loadedEvents} />}</Await>
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
        return resData
    }
}

export function loader() {
    return defer({
        events: loadEvents(),
    })
}
