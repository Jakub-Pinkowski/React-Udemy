import { useState, useEffect } from 'react'

import useInput from '../hooks/use-input'

const SimpleInput = () => {
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangedHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput,
    } = useInput((value) => value.trim() !== '')

    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)

    const enteredEmailIsValid = enteredEmail.trim() !== '' && enteredEmail.includes('@')
    const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched

    let formIsValid = false

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true
    }

    const emailInputChangeHandler = (event) => {
        setEnteredEmail(event.target.value)
    }

    const emailInputBlurHandler = (event) => {
        setEnteredEmailTouched(true)
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault()

        if (!enteredNameIsValid || !enteredEmailIsValid) {
            return
        }

        console.log(enteredName)

        resetNameInput()

        setEnteredEmail('')
        setEnteredEmailTouched(false)
    }

    const nameInputClasses = !nameInputHasError ? 'form-control' : 'form-control invalid'
    const emailInputClasses = !emailInputIsInvalid ? 'form-control' : 'form-control invalid'

    return (
        <form onSubmit={formSubmissionHandler} className="form-control">
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={nameChangedHandler}
                    onBlur={nameBlurHandler}
                    value={enteredName}
                />
                {nameInputHasError && <p className="error-text">Name must not be empty.</p>}
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
