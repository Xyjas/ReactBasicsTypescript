import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ExpenseList from './ExpenseList'
import ExpenseForm from './ExpenseForm'
import ExpensesTotal from './ExpensesTotal'
import { ExpenseType } from '../types/Expense'

export default function ExpenseWrapper() {
  const [expenses, setExpenses] = useState([])
  const [total, setTotal] = useState(0)

  const getExpenses = () => {
    axios
      .get('http://localhost:8080/api/expense')
      .then((result) => {
        setExpenses(result.data.expenses)
      })
      .catch((err) => {})
  }

  useEffect(() => {
    setTotal(getTotal())
  }, [expenses])

  useEffect(() => {
    getExpenses()
  }, [])

  const getTotal = () => {
    let updatedTotal = 0
    expenses.forEach((expense: ExpenseType) => (updatedTotal += Number(expense.amount)))
    return updatedTotal
  }

  const addExpense = (expense: ExpenseType) => {
    axios
      .post('http://localhost:8080/api/expense', expense)
      .then((result) => {
        getExpenses()
      })
      .catch((err) => {})
  }
  const removeExpense = (id: string) => {
    axios
      .delete(`http://localhost:8080/api/expense/${id}`)
      .then((result) => {
        getExpenses()
      })
      .catch((err) => {})
  }
  return (
    <div>
      <ExpensesTotal total={total} />
      <ExpenseForm addExpense={(expense) => addExpense(expense)} />
      <ExpenseList expenses={expenses} removeExpense={removeExpense} />
    </div>
  )
}
