import { Link, Outlet, useParams, useNavigate } from 'react-router-dom'
import { useQuery, useMutation } from '@tanstack/react-query'

import Header from '../Header.jsx'
import ErrorBlock from '../UI/ErrorBlock.jsx'
import { fetchEvent, deleteEvent, queryClient } from '../../util/http.js'

export default function EventDetails() {
    const navigate = useNavigate()
    const { id } = useParams()

    const { data, isPending, isError, error } = useQuery({
        queryKey: ['event', id],
        queryFn: ({ signal }) =>
            fetchEvent({
                signal,
                id,
            }),
    })

    const { mutate } = useMutation({
        mutationFn: deleteEvent,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['event'],
            })
            navigate('/events')
        },
    })

    const handleDelete = () => {
        mutate({ id })
    }

    let content

    if (isPending) {
        content = (
            <div id="event-details-content" className="center">
                <p>Fetching event data...</p>
            </div>
        )
    }

    if (isError) {
        content = (
            <div id="event-details-content" className="center">
                <ErrorBlock
                    title="Failed to laod event"
                    message={error.info?.message || 'Failed to fetch event data'}
                />
            </div>
        )
    }

    if (data) {
        const imageSrc = `http://localhost:3000/${data.image}`
        const formattedDate = new Date(data.date).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        })

        content = (
            <>
                <header>
                    <h1>{data.title}</h1>
                    <nav>
                        <button onClick={handleDelete}>Delete</button>
                        <Link to="edit">Edit</Link>
                    </nav>
                </header>
                <div id="event-details-content">
                    <img src={imageSrc} alt={data.title} />
                    <div id="event-details-info">
                        <div>
                            <p id="event-details-location">{data.location}</p>
                            <time dateTime={`Todo-DateT$Todo-Time`}>
                                {formattedDate} @ {data.time}
                            </time>
                        </div>
                        <p id="event-details-description">{data.description}</p>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <Outlet />
            <Header>
                <Link to="/events" className="nav-item">
                    View all Events
                </Link>
            </Header>
            <article id="event-details">{content}</article>
        </>
    )
}
