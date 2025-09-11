import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import DashboardLayout from "./layouts/DashboardLayout";

import AuthLayout from "./layouts/AuthLayout";
import { authRoutes } from "./routes/authentication/AuthenticationRoutes";
import Dashboard from "./pages/app/dashboard/Dashboard";
import TenantDetails from "./pages/app/tenant/TenantDetails";
import LandLordDetails from "./pages/app/landlord/LandLordDetails";
import PropertiesDetail from "./pages/app/properties/PropertiesDetail";
import Properties from "./pages/app/properties/Properties";

import Tenant from "./pages/app/tenant/Tenant";
import Landlord from "./pages/app/landlord/landLord";
import PushNotification from "./pages/app/notification/PushNotification";
import Subscription from "./pages/app/subscription/Subscription";
import Block from "./pages/app/block/Block";
import UploadLegalDoc from "./pages/app/upload doc/UploadLegalDoc";
import ProfileReview from "./pages/app/profile/ProfileReview";
import Cookies from "js-cookie";
import appRoutes from "./routes/app/AppRoutes";
function ProtectedRoute({ children }) {
  const token = Cookies.get("token");
  return token ? children : <Navigate to="/auth/login" replace />;
}


function App () {
  return (
    <Routes>
   

   <Route
        path="/"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        {appRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.url}
            element={<route.page />}
          />
        ))}
        {/* Optional default redirect for "/" */}
        <Route index element={<Navigate to="/dashboard" replace />} />
      </Route>

      <Route path="auth" element={<AuthLayout />}>
       {authRoutes.map((route , index) => (
         <Route key={index} path={route.url} element={<route.page />} />
       ))}
      </Route>

      <Route
        path="*"
        element={<div className="text-7xl">Page Not Found</div>}
      />
    </Routes>
  );
}

export default App;
