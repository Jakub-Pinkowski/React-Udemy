import classes from './UsersList.module.css'

const UsersList = (props) => {
    const { users } = props

    return (
        <div className={classes.users}>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.age} years old)
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UsersList
