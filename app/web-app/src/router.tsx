import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { getUser } from "./react-router/api/user_api";
import ProtectedRoute from "./react-router/components/ProtectedRoute";
import AdminLayout from "./layouts/AdminLayout";
import LoginPage from "./auth/pages/LoginPage";
import UnauthorizedPage from "./auth/pages/UnauthorizedPage";
import ErrorPage from "./error/pages/ErrorPage";
import { ChakraProvider } from "@chakra-ui/react";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement:
            <ChakraProvider>
                <ErrorPage />
            </ChakraProvider>,
        children: [
            {
                path: '/login',
                loader: getUser,
                element: <LoginPage />
            },
            {
                path: '/',
                loader: getUser,
                element: <ProtectedRoute />,
                children: [
                    {
                        path: '/',
                        element: <AdminLayout />
                    }
                ]
            },
            {
                path: '/unauthorized',
                element: <UnauthorizedPage />
            }
        ]
    },
]);
