import {
  Box,
  Flex,
  Text,
  Button,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import { useCount, useContractMethod } from "../hooks";
import { useState } from "react";

export default function Count() {
  const count = useCount();

  const { state, send: incrementCount } = useContractMethod("incrementCount");
  const { state: setCountState, send: setCount } =
    useContractMethod("setCount");
  const [input, setInput] = useState("");
  function handleSetCount() {
    const _count = parseInt(input);
    if (_count) {
      setCount(_count);
    }
  }

  function handleInput(valueAsString: string, valueAsNumber: number) {
    setInput(valueAsString);
  }

  return (
    <Flex direction="column" align="center" mt="4">
      <Text color="white" fontSize="8xl">
        {count ? count.toNumber() : 0}
      </Text>
      <Button colorScheme="teal" size="lg" onClick={incrementCount}>
        Increment
      </Button>
      <Box mt={4}>
        <NumberInput
          mb={2}
          min={1}
          value={input}
          onChange={handleInput}
          color="white"
          clampValueOnBlur={false}
        >
          <NumberInputField />
        </NumberInput>
        <Button colorScheme="purple" onClick={handleSetCount}>
          Set Count
        </Button>
      </Box>
    </Flex>
  );
}
