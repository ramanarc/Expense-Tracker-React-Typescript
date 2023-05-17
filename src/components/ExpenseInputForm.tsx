import { Box, Button, FormControl, FormLabel, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select } from "@chakra-ui/react"

const ExpenseInputForm = () => {
  return (
    <Box p={4}>
      <FormControl isRequired marginBottom={4}>
        <FormLabel fontWeight='bold'>Description</FormLabel>
        <Input placeholder='Enter expense description' />
      </FormControl>
      <FormControl isRequired marginBottom={4}>
        <FormLabel fontWeight='bold'>Amount</FormLabel>
        <NumberInput min={1}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <FormControl isRequired marginBottom={4}>
        <FormLabel fontWeight='bold'>What's the expense category?</FormLabel>
        <Select>
          <option>Groceries</option>
          <option>Utilities</option>
          <option>Entertainment</option>
          <option>Housing</option>
        </Select>
      </FormControl>
      <Button mt={4} colorScheme='blue' type='submit'>
        Submit
      </Button>
    </Box>
  )
}

export default ExpenseInputForm
