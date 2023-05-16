import { Select } from "@chakra-ui/react"

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <div>
      <Select placeholder='Select category' size='md' p={4} onChange={(e) => onSelectCategory(e.target.value)}>
        <option value='Groceries'>Groceries</option>
        <option value='Utilities'>Utilities</option>
        <option value='Entertainment'>Entertainment</option>
        <option value='Housing'>Housing</option>
      </Select>
    </div>
  )
}

export default ExpenseFilter
