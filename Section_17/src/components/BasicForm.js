import useInput from '../hooks/use-input'

const BasicForm = (props) => {
    const {
        value: enteredFirstName,
        isValid: enteredFirstNameIsValid,
        hasError: firstNameInputHasError,
        valueChangeHandler: firstNameChangedHandler,
        inputBlurHandler: firstNameBlurHandler,
        reset: resetFirstNameInput,
    } = useInput((value) => value.trim() !== '')

    const {
        value: enteredLastName,
        isValid: enteredLastNameIsValid,
        hasError: lastNameInputHasError,
        valueChangeHandler: lastNameChangedHandler,
        inputBlurHandler: lastNameBlurHandler,
        reset: resetLastNameInput,
    } = useInput((value) => value.trim() !== '')

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangedHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput,
    } = useInput((value) => value.trim() !== '' && value.includes('@'))

    let formIsValid = false

    if (enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
        formIsValid = true
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault()

        if (!enteredFirstNameIsValid || !enteredLastNameIsValid || !enteredEmailIsValid) {
            return
        }

        console.log(enteredFirstName)
        console.log(enteredLastName)
        console.log(enteredEmail)

        resetFirstNameInput()
        resetLastNameInput()
        resetEmailInput()
    }

    const firstNameInputClasses = !firstNameInputHasError ? 'form-control' : 'form-control invalid'
    const lastNameInputClasses = !lastNameInputHasError ? 'form-control' : 'form-control invalid'
    const emailInputClasses = !emailInputHasError ? 'form-control' : 'form-control invalid'

    return (
        <form onSubmit={formSubmissionHandler} className="form-control">
            <div className="control-group">
                <div className={firstNameInputClasses}>
                    <label htmlFor="name">First Name</label>
                    <input
                        type="text"
                        id="name"
                        onChange={firstNameChangedHandler}
                        onBlur={firstNameBlurHandler}
                        value={enteredFirstName}
                    />
                    {firstNameInputHasError && (
                        <p className="error-text">First name must not be empty.</p>
                    )}
                </div>
                <div className={lastNameInputClasses}>
                    <label htmlFor="name">Last Name</label>
                    <input
                        type="text"
                        id="name"
                        onChange={lastNameChangedHandler}
                        onBlur={lastNameBlurHandler}
                        value={enteredLastName}
                    />
                    {lastNameInputHasError && (
                        <p className="error-text">Last name must not be empty.</p>
                    )}
                </div>
            </div>
            <div className={emailInputClasses}>
                <label htmlFor="name">E-Mail Address</label>
                <input
                    type="email"
                    id="email"
                    onChange={emailChangedHandler}
                    onBlur={emailBlurHandler}
                    value={enteredEmail}
                />
                {emailInputHasError && <p className="error-text">Please enter a valid email.</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    )
}

export default BasicForm
