import { useParams } from 'react-router-dom'

const EventDetailPage = () => {
    const params = useParams()

    return (
        <div>
            <h1>Event Detail Page</h1>
            <h2>{params.eventId}</h2>
        </div>
    )
}

export default EventDetailPage
