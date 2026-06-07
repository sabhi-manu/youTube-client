import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  const { isAuthenticated ,isLoading} = useSelector((state) => state.auth);

 if (isLoading) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <h2 className="text-lg font-medium">Loading...</h2>
    </div>
  );
}
  // Not logged in → go to login
  if (!isAuthenticated) {
    console.log("check protect route value ==>",isAuthenticated)
    return <Navigate to="/login" replace />;
  }

  // Logged in → allow access
  return <Outlet />;
};

export default ProtectedRoute;
