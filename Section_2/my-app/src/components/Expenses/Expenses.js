import React, { useState } from 'react'

import './Expenses.css'

import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selectedYear={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpenseItem
                    title={props.items[0].title}
                    date={props.items[0].date}
                    amount={props.items[0].amount}
                />
                <ExpenseItem
                    title={props.items[1].title}
                    date={props.items[1].date}
                    amount={props.items[1].amount}
                />
                <ExpenseItem
                    title={props.items[2].title}
                    date={props.items[2].date}
                    amount={props.items[2].amount}
                />
                <ExpenseItem
                    title={props.items[3].title}
                    date={props.items[3].date}
                    amount={props.items[3].amount}
                />
            </Card>
        </div>
    )
}

export default Expenses
