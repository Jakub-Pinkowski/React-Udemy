import { useState } from 'react'

import Header from './components/Header'
import Results from './components/Results'
import Form from './components/Form'

function App() {
    const [yearlyData, setYearlyData] = useState([])

    const calculateHandler = (userInput) => {
        console.log(userInput)
        // Should be triggered when form is submitted
        // You might not directly want to bind it to the submit event on the form though...

        const yearlyData = [] // per-year results

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

            yearlyData.push({
                year: i + 1,
                yearlyInterest: yearlyInterestFormatted,
                savingsEndOfYear: savingsEndOfYear.toFixed(2),
                yearlyContribution: yearlyContributionFormatted,
                totalInterest: totalInterestFormatted,
                totalInvestedCapital: totalInvestedCapitalFormatted,
            })
        }
        console.log(yearlyData)

        setYearlyData(yearlyData)

        // do something with yearlyData ...
    }

    return (
        <div>
            <Header />
            <Form onCalculate={calculateHandler} />

            {/* Todo: Show below table conditionally (only once result data is available) */}
            {/* Show fallback text if no data is available */}

            <Results yearlyData={yearlyData} />
        </div>
    )
}

export default App
