import { Link, useNavigate, useParams } from 'react-router-dom'
import { useQuery, useMutation } from '@tanstack/react-query'

import Modal from '../UI/Modal.jsx'
import EventForm from './EventForm.jsx'
import LoadingIndicator from '../UI/LoadingIndicator.jsx'
import ErrorBLock from '../UI/ErrorBlock.jsx'
import { fetchEvent, updateEvent, queryClient } from '../../util/http.js'

export default function EditEvent() {
    const { id } = useParams()
    const navigate = useNavigate()

    const { data, isPending, isError, error } = useQuery({
        queryKey: ['events', id],
        queryFn: ({ signal }) =>
            fetchEvent({
                signal,
                id,
            }),
    })

    const { mutate } = useMutation({
        mutationFn: updateEvent,
        onMutate: async (data) => {
            const newEvent = data.event
            console.log('newEvent', newEvent)

            await queryClient.cancelQueries({
                queryKey: ['events', id],
            })
            queryClient.setQueryData(['events', id], newEvent)
            console.log('newNewEvent', newEvent)
        },
    })

    function handleSubmit(formData) {
        mutate({
            id,
            event: formData,
        })
        navigate('../')
    }

    function handleClose() {
        navigate('../')
    }

    let content

    if (isPending) {
        content = (
            <div className="center">
                <LoadingIndicator />
            </div>
        )
    }

    if (isError) {
        content = (
            <>
                <ErrorBLock
                    title="Failed to load event"
                    message={error.info?.message || 'Please try again later'}
                />
                <div lassName="form-actions">
                    <Link to="../" className="button">
                        Okay
                    </Link>
                </div>
            </>
        )
    }

    if (data) {
        content = (
            <EventForm inputData={data} onSubmit={handleSubmit}>
                <Link to="../" className="button-text">
                    Cancel
                </Link>
                <button type="submit" className="button">
                    Update
                </button>
            </EventForm>
        )
    }

    return <Modal onClose={handleClose}>{content}</Modal>
}
