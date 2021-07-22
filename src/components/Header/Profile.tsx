import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Deivison Cardoso</Text>
        <Text color="gray.300" fontSize="small">deivisondc@gmail.com</Text>
      </Box>

      <Avatar size="md" name="Deivison Cardoso" src="https://github.com/deivisondc.png"/>
    </Flex>
  );
}