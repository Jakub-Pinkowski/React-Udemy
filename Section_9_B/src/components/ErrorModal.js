import { useState } from 'react'
import classes from './ErrorModal.module.css'

import Button from '../UI/Button'

const ErrorModal = (props) => {
    const { title, message, onClose } = props
    const [modalVisible, setModalVisible] = useState(true)

    const closeModalHandler = () => {
        setModalVisible(false)
        onClose()
    }

    const modalStyles = {
        display: modalVisible ? 'block' : 'none',
        opacity: modalVisible ? 1 : 0,
        transform: modalVisible
            ? 'translate(-50%, -50%) scale(1)'
            : 'translate(-50%, -50%) scale(0.9)',
    }

    return (
        <div className={classes.backdrop} onClick={closeModalHandler}>
            <div
                className={classes.modal}
                style={modalStyles}
                onClick={(event) => event.stopPropagation()}
            >
                <header className={classes.header}>
                    <h2>{title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={closeModalHandler}>Okay</Button>
                </footer>
            </div>
        </div>
    )
}

export default ErrorModal
