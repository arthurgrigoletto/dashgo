import { Flex, Text, Box, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>
            Arthur Grigoletto
          </Text>
          <Text color="gray.300" fontSize="small">
            arthur.grigoletto.lima@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Arthur Grigoletto" src="https://github.com/arthurgrigoletto.png"/>
    </Flex>
  )
}