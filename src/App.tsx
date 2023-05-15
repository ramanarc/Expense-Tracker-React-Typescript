import { useState } from 'react'
import ExpenseList from './components/ExpenseList'



function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Fruits', amount: 25, category: 'Groceries' },
    { id: 2, description: 'Popcorn', amount: 25, category: 'Utilities' },
    { id: 1, description: 'Netflix', amount: 25, category: 'Entertainment' },
    { id: 1, description: 'Rent', amount: 25, category: 'Housing' },
  ])

  return (
    <>
      <ExpenseList expenses={expenses} />
    </>
  )
}

export default App
