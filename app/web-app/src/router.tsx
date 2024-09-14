import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { getUser } from "./react-router/api/user_api";
import ProtectedRoute from "./react-router/components/ProtectedRoute";
import AdminLayout from "./layouts/AdminLayout";
import LoginPage from "./auth/pages/LoginPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/login',
                element: <LoginPage/>
            },
            {
                path: '/',
                element: <ProtectedRoute />,
                loader: getUser,
                children: [
                    {
                        path: '/',
                        element: <AdminLayout />
                    }
                ]
            },
        ]
    },
]);
