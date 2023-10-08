import { useState, useEffect } from 'react'

const SimpleInput = () => {
    const [enteredName, setEnteredName] = useState('')
    const [enteredNameTouched, setEnteredNameTouched] = useState(false)
    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)

    const enteredNameIsValid = enteredName.trim() !== ''
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched

    const enteredEmailIsValid = enteredEmail.trim() !== '' && enteredEmail.includes('@')
    const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched

    let formIsValid = false

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true
    }

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value)
    }

    const nameInputBlurHandler = (event) => {
        setEnteredNameTouched(true)
    }

    const emailInputChangeHandler = (event) => {
        setEnteredEmail(event.target.value)
    }

    const emailInputBlurHandler = (event) => {
        setEnteredEmailTouched(true)
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault()

        setEnteredNameTouched(true)
        setEnteredEmailTouched(true)

        if (!enteredNameIsValid || !enteredEmailIsValid) {
            return
        }

        console.log(enteredName)

        setEnteredName('')
        setEnteredNameTouched(false)
        setEnteredEmail('')
        setEnteredEmailTouched(false)
    }

    const nameInputClasses = !nameInputIsInvalid ? 'form-control' : 'form-control invalid'
    const emailInputClasses = !emailInputIsInvalid ? 'form-control' : 'form-control invalid'

    return (
        <form onSubmit={formSubmissionHandler} className="form-control">
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={nameInputChangeHandler}
                    onBlur={nameInputBlurHandler}
                    value={enteredName}
                />
                {nameInputIsInvalid && <p className="error-text">Name must not be empty.</p>}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor="email">Your E-mail</label>
                <input
                    type="email"
                    id="email"
                    onChange={emailInputChangeHandler}
                    onBlur={emailInputBlurHandler}
                    value={enteredEmail}
                />
                {emailInputIsInvalid && <p className="error-text">Email must be valid</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    )
}

export default SimpleInput
