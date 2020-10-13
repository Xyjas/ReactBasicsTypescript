import React, { useState } from 'react'
import { ExpenseType } from '../types/Expense'

interface ExpenseFormProps {
  addExpense(expense: ExpenseType): void
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ addExpense }) => {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState(0)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    addExpense({ name, amount })
    setAmount(0)
    setName('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Name: </p>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <p>Amount: </p>
        <input type="number" value={amount} onChange={e => setAmount(Number(e.target.value))} />
        <input type="submit" />
      </form>
    </div>
  )
}

export default ExpenseForm