import { FcGoogle } from 'react-icons/fc'
import { Box, Button, Card, CardBody, Center, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import { VITE_APP_LOGIN_URL } from '../../common/constants/env_constants';
import { Navigate, useLoaderData } from 'react-router-dom';
import { ApiResponse } from '../../types/api_response.type';

export default function LoginPage() {

  const userData = useLoaderData() as ApiResponse;
  
  if (userData?.success) {
    return <Navigate to='/' />
  } else return (
    <Flex flexDirection='row' width='100%' height='100vh'>
      <Center width={{ base: '100%', sm: '100%', md: '100%', lg: '50%', xl: '50%' }}>
        <Box width={{ base: '80%', sm: '90%', md: '50%', lg: '50%', xl: '50%' }}>
          <Heading color='gray.700' textAlign='center' as='h4' size='lg' mb='4'>Sign In to <Text as='i' bgGradient='linear(to-tr, yellow.500, red.400, red.500, red.600)' bgClip='text' fontWeight='w700'>Menyokard</Text></Heading>
          <Card shadow='lg'>
            <CardBody>
              <Text textAlign='center' mt='2' color='gray.500' >Streamline Your Café Experience with Real-Time Order Management.</Text>
              <Divider my='4' />
              <Button as={'a'} href={VITE_APP_LOGIN_URL} w={'full'} variant={'outline'} bgColor='blue.500' textColor='white' leftIcon={<FcGoogle />}>
                <Center>
                  <Text>Sign in with Google</Text>
                </Center>
              </Button>
            </CardBody>
          </Card>
        </Box>
      </Center>
      <Center width='50%' bgGradient='linear(to-tr, yellow.500, red.500, red.500, red.600)' display={{ base: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' }}>
        {/* TODO: Add Feature slide show. */}
      </Center>
    </Flex>
  )
}
