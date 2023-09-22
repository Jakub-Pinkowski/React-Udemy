import { useState } from 'react'

import classes from './AddUser.module.css'
import ErrorModal from './ErrorModal'
import Button from '../UI/Button'
import Card from '../UI/Card'

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState(null)

    const addUserHandler = (event) => {
        event.preventDefault()

        if (
            enteredUsername.trim().length === 0 ||
            enteredAge.trim().length === 0 ||
            +enteredAge < 1
        ) {
            // Set an error message
            setError({
                title: 'Invalid input',
                message:
                    'Please enter a valid name and age (non-empty values) greater than 0.',
            })
            return
        }

        props.onAddUser(enteredUsername, enteredAge)

        // Clear the error when a valid user is added
        setError(null)

        setEnteredUsername('')
        setEnteredAge('')
    }

    const closeModalHandler = () => {
        setError(null)
    }

    return (
        <Card>
            <div className={classes.input}>
                {error && (
                    <ErrorModal
                        title={error.title}
                        message={error.message}
                        onClose={closeModalHandler}
                    />
                )}{' '}
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        value={enteredUsername}
                        onChange={(event) =>
                            setEnteredUsername(event.target.value)
                        }
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        id="age"
                        type="number"
                        value={enteredAge}
                        onChange={(event) => setEnteredAge(event.target.value)}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </div>
        </Card>
    )
}

export default AddUser
