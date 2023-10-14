import { json, redirect } from 'react-router-dom'

import EventForm from '../components/EventForm'

const url = 'http://localhost:8080/events'

const NewEventPage = () => {
    return <EventForm />
}

export default NewEventPage

export async function action({ request, params }) {
    const data = await request.formData()

    const eventData = {
        title: data.get('title'),
        image: data.get('image'),
        date: data.get('date'),
        description: data.get('description'),
    }

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
    })

    if (response.status === 422) {
        return response
    }

    if (!response.ok) {
        throw json({ message: 'Could not create event' }, { status: 500 })
    }

    return redirect('/events')
}
