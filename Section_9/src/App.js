import { useState } from 'react'

import Header from './components/Header'
import Results from './components/Results'
import Form from './components/Form'

function App() {
    const [yearlyData, setYearlyData] = useState([])

    const calculateHandler = (userInput) => {
        const calculatedYearlyData = [] // per-year results

        let currentSavings = +userInput['current-savings'] // feel free to change the shape of this input object!
        const yearlyContribution = +userInput['yearly-contribution'] // as mentioned: feel free to change the shape...
        const expectedReturn = +userInput['expected-return'] / 100
        const duration = +userInput['duration']

        let totalInterest = 0
        let totalInvestedCapital = 0

        // The below code calculates yearly results (total savings, interest etc)
        for (let i = 0; i < duration; i++) {
            const yearlyInterest = currentSavings * expectedReturn
            currentSavings += yearlyInterest + yearlyContribution

            // Convert all relevant properties to numbers before using toFixed
            const savingsEndOfYear = +currentSavings
            const yearlyInterestFormatted = yearlyInterest.toFixed(2)
            const yearlyContributionFormatted = yearlyContribution.toFixed(2)
            totalInterest += yearlyInterest
            totalInvestedCapital += yearlyContribution
            const totalInterestFormatted = totalInterest.toFixed(2)
            const totalInvestedCapitalFormatted =
                totalInvestedCapital.toFixed(2)

            calculatedYearlyData.push({
                year: i + 1,
                yearlyInterest: yearlyInterestFormatted,
                savingsEndOfYear: savingsEndOfYear.toFixed(2),
                yearlyContribution: yearlyContributionFormatted,
                totalInterest: totalInterestFormatted,
                totalInvestedCapital: totalInvestedCapitalFormatted,
            })
        }
        console.log(calculatedYearlyData)

        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        })

        const formattedYearlyData = calculatedYearlyData.map((data) => ({
            ...data,
            yearlyInterest: formatter.format(+data.yearlyInterest),
            savingsEndOfYear: formatter.format(+data.savingsEndOfYear),
            yearlyContribution: formatter.format(+data.yearlyContribution),
            totalInterest: formatter.format(+data.totalInterest),
            totalInvestedCapital: formatter.format(+data.totalInvestedCapital),
        }))

        console.log(formattedYearlyData)

        setYearlyData(formattedYearlyData)
    }

    return (
        <div>
            <Header />
            <Form onCalculate={calculateHandler} />
            <Results yearlyData={yearlyData} />
        </div>
    )
}

export default App
