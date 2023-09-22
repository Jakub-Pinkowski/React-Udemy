import { useState } from 'react'

import classes from './AddUser.module.css'

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')

    const addUserHandler = (event) => {}

    return (
        <div className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" />
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" />
                <button type="submit">Add User</button>
            </form>
        </div>
    )
}

export default AddUser
