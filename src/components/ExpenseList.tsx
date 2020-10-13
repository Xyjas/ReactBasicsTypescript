import React from 'react'
import { ExpenseType } from '../types/Expense'
import Expense from './Expense'

interface ExpenseListProps {
  expenses: Array<ExpenseType>;
  removeExpense(id: string | undefined): void;
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses, removeExpense }) => {
  return (
    <div>
      {expenses.map(expense => <Expense key={expense._id} expense={expense} removeExpense={removeExpense} />
      )}
    </div>
  )
}

export default ExpenseList
