import { Box, Select } from "@chakra-ui/react"
import { categories } from "../App";

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <Box p={4}>
      <Select placeholder='Select category' size='md' onChange={(e) => onSelectCategory(e.target.value)}>
        {categories.map((category) => <option key={category} value={category}>{category}</option>)}
        {/* <option value='Groceries'>Groceries</option> */}

      </Select>
    </Box>
  )
}

export default ExpenseFilter
