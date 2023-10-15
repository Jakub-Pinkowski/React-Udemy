import { Link, useNavigate, useParams } from 'react-router-dom'
import { useQuery, useMutation } from '@tanstack/react-query'

import Modal from '../UI/Modal.jsx'
import EventForm from './EventForm.jsx'
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

    function handleSubmit(formData) {}

    function handleClose() {
        navigate('../')
    }

    return (
        <Modal onClose={handleClose}>
            <EventForm inputData={null} onSubmit={handleSubmit}>
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
