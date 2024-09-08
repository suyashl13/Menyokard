import { ChakraProvider } from '@chakra-ui/react'
import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({defaultOptions: {}})

export default function RootProvider({
    children
}: { children: ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider>
                {children}
            </ChakraProvider>
        </QueryClientProvider>
    );
}
