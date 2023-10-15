import { useRef, useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { fetchEvents } from '../../util/http.js'
import LoadingIndicator from '../UI/LoadingIndicator'
import ErrorBlock from '../UI/ErrorBlock'
import EventItem from './EventItem'

export default function FindEventSection() {
    const searchElement = useRef()

    const [searchTerm, setSearchTerm] = useState('')

    const {
        data,
        isPending,
        isError,
        error,
    } = useQuery({
        queryKey: ['events', { seatch: searchTerm }],
        queryFn: () => fetchEvents(searchTerm),
        staleTime: 5000,
    })

    function handleSubmit(event) {
        event.preventDefault()
        setSearchTerm(searchElement.current.value)
    }

    let content

    if (isPending) {
        return <LoadingIndicator />
    }

    if (isError) {
        content = (
            <ErrorBlock
                title={'An error occoured'}
                message={error.info?.message || 'Failed to fetch events.'}
            />
        )
    }

    if (data) {
        content = (
            <ul className="events-list">
                {data.map((event) => (
                    <li key={event.id}>
                        <EventItem event={event} />
                    </li>
                ))}
            </ul>
        )
    }

    return (
        <section className="content-section" id="all-events-section">
            <header>
                <h2>Find your next event!</h2>
                <form onSubmit={handleSubmit} id="search-form">
                    <input type="search" placeholder="Search events" ref={searchElement} />
                    <button>Search</button>
                </form>
            </header>
            {content}
        </section>
    )
}
