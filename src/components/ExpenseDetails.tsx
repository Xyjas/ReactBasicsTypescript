import React from 'react'

export default function ExpenseDetails(props: any) {
  return <div>This is expense with id {props.match.params.expense_id}</div>
}
