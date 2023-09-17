import './Expenses.css'

import Card from './Card'
import ExpenseItem from './ExpenseItem'

function Expenses(props) {
    return (
        <Card className="expenses">
            <ExpenseItem
                title={props.items[0].title}
                date={props.items[0].date}
                amount={props.items[0].amount}
            />
        </Card>
    )
}

export default Expenses
