import classes from './UsersList.module.css'

import Card from '../UI/Card'

const UsersList = (props) => {
    const { users } = props

    return (
        <Card>
            <div className={classes.users}>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            {user.name} ({user.age} years old)
                        </li>
                    ))}
                </ul>
            </div>
        </Card>
    )
}

export default UsersList
