import React from 'react'

export default function ExpensesTotal({ total } : {total: any}) {
  return (
    <div>
      <h2>Total: {total}</h2>
    </div>
  )
}
