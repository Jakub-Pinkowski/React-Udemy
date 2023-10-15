import { useState } from 'react'
import { Link, Outlet, useParams, useNavigate } from 'react-router-dom'
import { useQuery, useMutation } from '@tanstack/react-query'

import Header from '../Header.jsx'
import ErrorBlock from '../UI/ErrorBlock.jsx'
import Modal from '../UI/Modal.jsx'
import { fetchEvent, deleteEvent, queryClient } from '../../util/http.js'

export default function EventDetails() {
    const [isDeleting, setIsDeleting] = useState(false)
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
                refetchType: 'none',
            })
            navigate('/events')
        },
    })

    const handleStartDelete = () => {
        setIsDeleting(true)
    }

    const handleStopDelete = () => {
        setIsDeleting(false)
    }

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
                        <button onClick={handleStartDelete}>Delete</button>
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
            {isDeleting && (
                <Modal onClose={handleStopDelete}>
                    <h2>Are you sure?</h2>
                    <p>Do you really want to delete this event? This process cannot be undone.</p>
                    <div className="form-actions">
                        <button onClick={handleStopDelete} className="button-text">
                            Cancel
                        </button>
                        <button onClick={handleDelete} className="button">
                            Delete
                        </button>
                    </div>
                </Modal>
            )}
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
