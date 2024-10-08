import { useRouteError } from "react-router-dom";
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

export default function ErrorPage() {
  const error: Error = useRouteError() as Error;

  return (
    <Flex height='100vh' textAlign="center" py={10} px={6} flexDir='column' alignItems='center' justifyContent='center'>
      <Box>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bg={'red.500'}
          rounded={'50px'}
          w={'55px'}
          h={'55px'}
          textAlign="center">
          <CloseIcon boxSize={'20px'} color={'white'} />
        </Flex>
      </Box>
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Oops! Something went wrong.
      </Heading>
      <Text color={'gray.500'}>
        {error.message}
      </Text>
    </Flex>
  )
}