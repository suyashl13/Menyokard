import { Navigate, Outlet, useLoaderData } from "react-router-dom";
import { ApiResponse } from "../../types/api_response.type";

export default function ProtectedRoute() {
  const loaderData = useLoaderData() as ApiResponse;

  if (loaderData?.success) {
    return (
      <Outlet />
    ); 
  } else return <Navigate to='/unauthorized'/>
}
