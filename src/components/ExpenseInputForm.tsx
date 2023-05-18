import { Box, Button, FormControl, FormLabel, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select } from "@chakra-ui/react"
import { categories } from "../App";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from 'zod';

const schema = z.object({
  description: z.string().min(3).max(50),
  amount: z.number().min(0.01).max(100_000),
  category: z.enum(categories)
})

type ExpenseFormData = z.infer<typeof schema>

const ExpenseInputForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  }

  return (
    <Box p={4}>
      <form onSubmit={handleSubmit(onSubmit)}>
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
    </Box >
  )
}

export default ExpenseInputForm
