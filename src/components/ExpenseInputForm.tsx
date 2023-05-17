import { Box, Button, FormControl, FormLabel, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select } from "@chakra-ui/react"
import { categories } from "../App";

const ExpenseInputForm = () => {
  return (
    <Box p={4}>
      <form onSubmit={(e) => {
        e.preventDefault();
        console.log(e.target)
      }}>
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
            <option></option>
            {categories.map((category) => <option key={category} value={category}>{category}</option>)}
          </Select>
        </FormControl>
        <Button mt={4} colorScheme='blue' type='submit'>
          Submit
        </Button>
      </form>
    </Box>
  )
}

export default ExpenseInputForm
