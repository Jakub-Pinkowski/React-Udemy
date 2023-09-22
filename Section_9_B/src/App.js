import { useState } from 'react'

import AddUser from './components/AddUser'
import UsersList from './components/UsersList'
import ErrorModal from './components/ErrorModal'

function App() {
    const [usersList, setUsersList] = useState([])

    const addUserHandler = (uName, uAge) => {
        setUsersList((prevUsersList) => {
            return [...prevUsersList, { name: uName, age: uAge }]
        })

        console.log(usersList)
    }

    return (
        <div>
            <AddUser onAddUser={addUserHandler} />
            <UsersList users={usersList} />
            <ErrorModal
                title="An error occurred!"
                message="Something went wrong!"
            />
        </div>
    )
}

export default App
