import classes from './ErrorModal.module.css'

const ErrorModal = (props) => {
    const { title, message } = props

    return (
        <div className={classes.backdrop}>
            <div className={classes.modal}>
                <header className={classes.header}>
                    <h2>{title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{message}</p>
                </div>
                <footer className={classes.actions}>
                    <button>Okay</button>
                </footer>
            </div>
        </div>
    )
}

export default ErrorModal
