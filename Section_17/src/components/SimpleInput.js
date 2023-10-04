import { useRef, useState } from 'react'

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState('')

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value)
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault()

        console.log(enteredName)

        // nameInputRef.current.value = '' // NOT IDEAL, DON'T MANIPULATE THE DOM
        setEnteredName('') // IDEAL
    }

    return (
        <form onSubmit={formSubmissionHandler} className="form-control">
            <div className="form-control">
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={nameInputChangeHandler}
                    value={enteredName}
                />
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    )
}

export default SimpleInput
