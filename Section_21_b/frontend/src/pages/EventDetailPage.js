import { useRouteLoaderData, json, redirect } from 'react-router-dom'

import EventItem from '../components/EventItem'
import EventsList from '../components/EventsList'

const eventsUlr = 'http://localhost:8080/events'

const EventDetailPage = () => {
    const data = useRouteLoaderData('event-detail')
    const event = data.event

    return (
        <>
            <EventItem event={event} />
            <EventsList events={data.events} />
        </>
    )
}

export default EventDetailPage

async function loadEvent(id) {
    const id = params.eventId

    const response = await fetch(`${eventsUlr}/${id}`)

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

export async function action({ request, params }) {
    const id = params.eventId

    const response = await fetch(`${eventsUlr}/${id}`, {
        method: 'DELETE',
    })

    console.log(response)

    if (!response.ok) {
        throw json({ message: 'Could not delete the event' }, { status: 500 })
    }

    return redirect('/events')
}
