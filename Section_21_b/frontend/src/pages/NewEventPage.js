import EventForm from '../components/EventForm'

const url = 'http://localhost:8080/events'

const NewEventPage = () => {
    return <EventForm method={'post'} />
}

export default NewEventPage
