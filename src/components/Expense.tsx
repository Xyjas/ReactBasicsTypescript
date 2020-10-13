import React from 'react'
import { useHistory } from 'react-router'
import { ExpenseType } from '../types/Expense'
import './Expense.css'

interface ExpenseProps {
  expense: ExpenseType;
  removeExpense(id: string | undefined): void;
}

const Expense: React.FC<ExpenseProps> = ({ expense, removeExpense }) => {
  const history = useHistory()
  return (
    <div className="expense">
      {`name: ${expense.name}, amount: ${expense.amount}`}
      <button onClick={() => removeExpense(expense._id)}>Remove</button>
      <button onClick={() => history.push(`/expense/${expense._id}`)}>
        Details
      </button>
    </div>
  )
}

export default Expense