import { useLoaderData, json } from 'react-router-dom'

import EventItem from '../components/EventItem'

const eventsUlr = 'http://localhost:8080/events'

const EventDetailPage = () => {
    const data = useLoaderData()
    const event = data.event

    return <EventItem event={event} />
}

export default EventDetailPage

export async function loader({ request, params }) {
    const id = params.eventId

    const response = await fetch(`${eventsUlr}/${id}`)

    if (response.status !== 200) {
        throw json({ message: 'Could not fetch event' }, { status: 500 })
    } else {
        return response
    }
}
