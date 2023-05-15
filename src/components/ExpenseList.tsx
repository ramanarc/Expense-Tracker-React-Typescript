import { Button, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react"

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[]
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  return (
    <TableContainer p={4}>
      <Table size='lg' variant='striped' colorScheme='gray'>
        <Thead>
          <Tr>
            <Th>Description</Th>
            <Th>Amount</Th>
            <Th>Category</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {expenses.map((expense) => <Tr key={expense.id}>
            <Td>{expense.description}</Td>
            <Td>{expense.amount}</Td>
            <Td>{expense.category}</Td>
            <Td><Button colorScheme='red' variant='outline' onClick={() => onDelete(expense.id)}>Delete</Button></Td>
          </Tr>)}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Total</Th>
            <Th>₹{expenses.reduce((acc, expense) => expense.amount + acc, 0)}</Th>
            <Th></Th>
            <Th></Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  )
}

export default ExpenseList
