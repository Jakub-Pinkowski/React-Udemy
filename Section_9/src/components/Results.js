import React from 'react'
import classes from './Results.module.css'

const Results = (props) => {
    const { yearlyData } = props

    if (!yearlyData || yearlyData.length === 0) {
        return (
            <h3 className={classes.fallback}>
                Please insert your calculations to see the summary table
            </h3>
        )
    }

    return (
        <table className={classes.result}>
            <thead>
                <tr>
                    <th>YEAR NUMBER</th>
                    <th>TOTAL SAVINGS END OF YEAR</th>
                    <th>INTEREST GAINED IN YEAR</th>
                    <th>TOTAL INTEREST GAINED</th>
                    <th>TOTAL INVESTED CAPITAL</th>
                </tr>
            </thead>
            <tbody>
                {yearlyData.map((data) => (
                    <tr key={data.year}>
                        <td>{data.year}</td>
                        <td>{data.savingsEndOfYear}</td>
                        <td>{data.yearlyInterest}</td>
                        <td>{data.totalInterest}</td>
                        <td>{data.totalInvestedCapital}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Results
