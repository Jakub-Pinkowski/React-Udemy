import { useRouteLoaderData, json, redirect } from 'react-router-dom'

import EventItem from '../components/EventItem'

const eventsUlr = 'http://localhost:8080/events'

const EventDetailPage = () => {
    const data = useRouteLoaderData('event-detail')
    const event = data.event

    return <EventItem event={event} />
}

export default EventDetailPage

export async function loader({ request, params }) {
    const id = params.eventId

    const response = await fetch(`${eventsUlr}/${id}`)

    if (!response.ok) {
        throw json({ message: 'Could not fetch event' }, { status: 500 })
    } else {
        return response
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
