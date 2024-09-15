import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react'
import { WarningTwoIcon } from '@chakra-ui/icons'

export default function UnauthorizedPage() {
  return (
    <Flex height='100vh' flexDirection='column' justifyContent='center'>
      <Box textAlign="center" py={10} px={6}>
        <WarningTwoIcon boxSize={'60px'} color={'orange.300'} />
        <Heading as="h2" size="xl" mt={6} mb={2}>
          You're not authorized.
        </Heading>
        <Text color={'gray.500'}>
          You are not logged in. Please <Link textColor='blue.400' href='/login'>log in or sign up</Link> to continue.
        </Text>
      </Box>
    </Flex>
  );
}