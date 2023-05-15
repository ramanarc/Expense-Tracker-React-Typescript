import { Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react"

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[]
}

const ExpenseList = ({ expenses }: Props) => {
  return (
    <TableContainer p={4}>
      <Table size='sm'>
        <Thead>
          <Tr>
            <Th>Description</Th>
            <Th>Amount</Th>
            <Th>Category</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>

        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Total</Th>
            <Th>$2450</Th>
            <Th></Th>
            <Th></Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  )
}

export default ExpenseList
