import { useRouteLoaderData, json, redirect, defer, Await } from 'react-router-dom'
import { Suspense } from 'react'

import EventItem from '../components/EventItem'
import EventsList from '../components/EventsList'

const eventsUrl = 'http://localhost:8080/events'

const EventDetailPage = () => {
    const { event, events } = useRouteLoaderData('event-detail')

    return (
        <>
            <Suspense fallback={<p>Loading...</p>}>
                <Await resolve={event}>{(event) => <EventItem event={event} />}</Await>
                <Await resolve={events}>{(events) => <EventsList events={events} />}</Await>
            </Suspense>
        </>
    )
}

export default EventDetailPage

async function loadEvent(id) {
    const response = await fetch(`${eventsUrl}/${id}`)

    if (!response.ok) {
        throw json({ message: 'Could not fetch event' }, { status: 500 })
    } else {
        const resData = await response.json()
        const event = resData.event
        return event
    }
}

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

export async function loader({ request, params }) {
    const id = params.eventId

    return defer({
        event: await loadEvent(id),
        events: loadEvents(),
    })
}

export async function action({ request, params }) {
    const id = params.eventId

    const response = await fetch(`${eventsUrl}/${id}`, {
        method: 'DELETE',
    })

    console.log(response)

    if (!response.ok) {
        throw json({ message: 'Could not delete the event' }, { status: 500 })
    }

    return redirect('/events')
}
