import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr={4} textAlign="right">
        <Text>Lucas Martins</Text>
        <Text fontSize="snall" color="gray.300">
          lmartins@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Lucas Martins"
        src="https://github.com/lucasmv2205.png"
      />
    </Flex>
  );
}
