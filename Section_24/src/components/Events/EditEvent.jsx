import { Link, useNavigate, useParams, redirect, useSubmit, useNavigation } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import Modal from '../UI/Modal.jsx'
import EventForm from './EventForm.jsx'
import LoadingIndicator from '../UI/LoadingIndicator.jsx'
import ErrorBLock from '../UI/ErrorBlock.jsx'
import { fetchEvent, updateEvent, queryClient } from '../../util/http.js'

export default function EditEvent() {
    const submit = useSubmit()
    const navigate = useNavigate()

    const { state } = useNavigation()
    const { id } = useParams()

    const { data, isError, error } = useQuery({
        queryKey: ['events', id],
        queryFn: ({ signal }) =>
            fetchEvent({
                signal,
                id,
            }),
    })

    function handleSubmit(formData) {
        submit(formData, {
            method: 'PUT',
        })
    }

    function handleClose() {
        navigate('../')
    }

    let content

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
                {state === 'submitting' ? (
                    <p>Sending data...</p>
                ) : (
                    <>
                        <Link to="../" className="button-text">
                            Cancel
                        </Link>
                        <button type="submit" className="button">
                            Update
                        </button>
                    </>
                )}
            </EventForm>
        )
    }

    return <Modal onClose={handleClose}>{content}</Modal>
}

export function loader({ params }) {
    const { id } = params

    return queryClient.fetchQuery({
        queryKey: ['events', id],
        queryFn: ({ signal }) =>
            fetchEvent({
                signal,
                id,
            }),
    })
}

export async function action({ request, params }) {
    const formData = await request.formData()
    const updatedEventData = Object.fromEntries(formData)
    const { id } = params

    await updateEvent({
        id,
        event: updatedEventData,
    })

    await queryClient.invalidateQueries({
        queryKey: ['events', id],
    })

    return {
        redirect: '../',
    }
}
