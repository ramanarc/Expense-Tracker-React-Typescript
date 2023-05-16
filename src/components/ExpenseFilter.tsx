import { Select } from "@chakra-ui/react"

const ExpenseFilter = () => {
  return (
    <div>
      <Select placeholder='Select category' size='md' p={4}>
        <option value='Groceries'>Groceries</option>
        <option value='Utilities'>Utilities</option>
        <option value='Entertainment'>Entertainment</option>
        <option value='Housing'>Housing</option>
      </Select>
    </div>
  )
}

export default ExpenseFilter
