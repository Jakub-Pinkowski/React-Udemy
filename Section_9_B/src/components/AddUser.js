import { useState } from 'react'

import classes from './AddUser.module.css'
import ErrorModal from './ErrorModal'

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')

    const addUserHandler = (event) => {
        event.preventDefault()

        if (
            enteredUsername.trim().length === 0 ||
            enteredAge.trim().length === 0
        ) {
            // Show modal
        }

        if (+enteredAge < 1) {
            // Show modal
        }

        props.onAddUser(enteredUsername, enteredAge)

        console.log(enteredUsername, enteredAge)

        setEnteredUsername('')
        setEnteredAge('')
    }

    return (
        <div className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    value={enteredUsername}
                    onChange={(event) => setEnteredUsername(event.target.value)}
                />
                <label htmlFor="age">Age (Years)</label>
                <input
                    id="age"
                    type="number"
                    value={enteredAge}
                    onChange={(event) => setEnteredAge(event.target.value)}
                />
                <button type="submit">Add User</button>
            </form>
            <ErrorModal
                title="An error occurred!"
                message="Something went wrong!"
            />
        </div>
    )
}

export default AddUser
