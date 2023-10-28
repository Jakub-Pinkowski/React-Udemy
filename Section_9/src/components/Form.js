import { useState } from 'react'

import classes from './Form.module.css'

const Form = (props) => {
    const [currentSavings, setCurrentSavings] = useState('')
    const [yearlyContribution, setYearlyContribution] = useState('')
    const [expectedReturn, setExpectedReturn] = useState('')
    const [duration, setDuration] = useState('')

    const submitHandler = (event) => {
        event.preventDefault()

        const userInput = {
            'current-savings': currentSavings,
            'yearly-contribution': yearlyContribution,
            'expected-return': expectedReturn,
            duration: duration,
        }

        props.onCalculate(userInput)
    }

    const resetHandler = (event) => {
        event.preventDefault()

        setCurrentSavings('')
        setYearlyContribution('')
        setExpectedReturn('')
        setDuration('')
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes['input-group']}>
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input
                        type="number"
                        increment="100"
                        id="current-savings"
                        value={currentSavings}
                        onChange={(event) => setCurrentSavings(event.target.value)}
                    />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input
                        type="number"
                        id="yearly-contribution"
                        value={yearlyContribution}
                        onChange={(event) => setYearlyContribution(event.target.value)}
                    />
                </p>
            </div>
            <div className={classes['input-group']}>
                <p>
                    <label htmlFor="expected-return">Expected Interest (%, per year)</label>
                    <input
                        type="number"
                        id="expected-return"
                        value={expectedReturn}
                        onChange={(event) => setExpectedReturn(event.target.value)}
                    />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input
                        type="number"
                        id="duration"
                        value={duration}
                        onChange={(event) => setDuration(event.target.value)}
                    />
                </p>
            </div>
            <p className={classes.actions}>
                <button type="reset" className={classes.buttonAlt} onClick={resetHandler}>
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
