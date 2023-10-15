import { Link, useNavigate, useParams } from 'react-router-dom'
import { useQuery, useMutation } from '@tanstack/react-query'

import Modal from '../UI/Modal.jsx'
import EventForm from './EventForm.jsx'
import LoadingIndicator from '../UI/LoadingIndicator.jsx'
import ErrorBLock from '../UI/ErrorBlock.jsx'
import { fetchEvent, updateEvent } from '../../util/http.js'

export default function EditEvent() {
    const { id } = useParams()
    const navigate = useNavigate()

    const { data, isPending, isError, error } = useQuery({
        queryKey: ['event', id],
        queryFn: ({ signal }) =>
            fetchEvent({
                signal,
                id,
            }),
    })

    const {
        mutate,
        isPending: isPendingUpdate,
        isError: isErrorUpdate,
        error: updateError,
    } = useMutation({
        mutationFn: updateEvent,
    })

    function handleSubmit(formData) {
        mutate({
            id,
            data: formData,
        })
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

    return (
        <Modal onClose={handleClose}>
            <EventForm inputData={data} onSubmit={handleSubmit}>
                <Link to="../" className="button-text">
                    Cancel
                </Link>
                <button type="submit" className="button">
                    Update
                </button>
            </EventForm>
        </Modal>
    )
}
