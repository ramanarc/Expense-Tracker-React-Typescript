import { Box, Select } from "@chakra-ui/react"

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <Box p={4}>
      <Select placeholder='Select category' size='md' onChange={(e) => onSelectCategory(e.target.value)}>
        <option value='Groceries'>Groceries</option>
        <option value='Utilities'>Utilities</option>
        <option value='Entertainment'>Entertainment</option>
        <option value='Housing'>Housing</option>
      </Select>
    </Box>
  )
}

export default ExpenseFilter
