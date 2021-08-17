import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Deivison Cardoso</Text>
          <Text color="gray.300" fontSize="small">deivisondc@gmail.com</Text>
        </Box>
      )}

      <Avatar size="md" name="Deivison Cardoso" src="https://github.com/deivisondc.png"/>
    </Flex>
  );
}