import { useState } from 'react'
import ExpenseList from './components/ExpenseList'
import ExpenseFilter from './components/ExpenseFilter'
import ExpenseInputForm from './components/ExpenseInputForm'
import { Box, Divider } from '@chakra-ui/react'



function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Fruits', amount: 150, category: 'Groceries' },
    { id: 2, description: 'Popcorn', amount: 80, category: 'Utilities' },
    { id: 3, description: 'Netflix', amount: 1500, category: 'Entertainment' },
    { id: 4, description: 'Rent', amount: 12500, category: 'Housing' },
  ])

  const [selectedCategory, setSelectedCategory] = useState('')

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((e) => e.id !== id))
  }

  // Implement filtered expenses functionality
  const filteredExpenses = selectedCategory ? expenses.filter((expense) => expense.category === selectedCategory) : expenses;

  return (
    <Box m={4}>
      <ExpenseInputForm />
      <Divider m={4} />
      <ExpenseFilter onSelectCategory={(category) => setSelectedCategory(category)} />
      <ExpenseList expenses={filteredExpenses} onDelete={handleDelete} />
    </Box>
  )
}

export default App
