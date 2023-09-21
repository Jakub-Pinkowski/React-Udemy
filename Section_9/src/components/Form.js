import classes from './Form.module.css'

const Form = (props) => {
    const submitHandler = (event) => {
        event.preventDefault()

        const userInput = {
            // feel free to change the shape of this object!
            'current-savings': event.target[0].value,
            'yearly-contribution': event.target[1].value,
            'expected-return': event.target[2].value,
            duration: event.target[3].value,
        }

        console.log(userInput)

        props.onCalculate(userInput)
    }

    const resetHandler = (event) => {
        event.preventDefault()

        // Access the form element and call the reset() method
        event.target.closest('form').reset()
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes['input-group']}>
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input type="number" id="current-savings" />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">
                        Yearly Savings ($)
                    </label>
                    <input type="number" id="yearly-contribution" />
                </p>
            </div>
            <div className={classes['input-group']}>
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input type="number" id="expected-return" />
                </p>
                <p>
                    <label htmlFor="duration">
                        Investment Duration (years)
                    </label>
                    <input type="number" id="duration" />
                </p>
            </div>
            <p className={classes.actions}>
                <button
                    type="reset"
                    className={classes.buttonAlt}
                    onClick={resetHandler}
                >
                    Reset
                </button>
                <button type="submit" className={classes.button}>
                    Calculate
                </button>
            </p>
        </form>
    )
}

export default Form
