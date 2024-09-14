import { Outlet, useLoaderData } from "react-router-dom";

export default function ProtectedRoute() {
  const loaderData = useLoaderData();

  console.log(loaderData);
  return (
    <Outlet />
  );
}
