import { useParams } from 'react-router-dom'

const EventDetailPage = () => {
    const { eventId } = useParams()

    return (
        <div>
            <h1>Event Detail Page</h1>
            <p>{eventId}</p>
        </div>
    )
}

export default EventDetailPage
