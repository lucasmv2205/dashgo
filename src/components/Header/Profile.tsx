import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr={4} textAlign="right">
          <Text>Lucas Martins</Text>
          <Text fontSize="snall" color="gray.300">
            lmartins@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Lucas Martins"
        src="https://github.com/lucasmv2205.png"
      />
    </Flex>
  );
}
