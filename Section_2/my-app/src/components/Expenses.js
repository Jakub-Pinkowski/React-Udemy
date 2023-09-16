import './Expenses.css'
import ExpenseItem from './ExpenseItem'

function Expenses(props) {
    return (
        <div className='expenses'>
            <ExpenseItem
                title={props.items[0].title}
                date={props.items[0].date}
                amount={props.items[0].amount}
            />
        </div>
    )
}

export default Expenses
