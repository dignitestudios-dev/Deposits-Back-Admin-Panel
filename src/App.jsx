import { Route, Routes } from "react-router";
import "./App.css";
import DashboardLayout from "./layouts/DashboardLayout";

import AuthLayout from "./layouts/AuthLayout";
import { authRoutes } from "./routes/authentication/AuthenticationRoutes";
import Dashboard from "./pages/app/dashboard/Dashboard";
import TenantDetails from "./pages/app/tenant/TenantDetails";
import LandLordDetails from "./pages/app/landlord/LandLordDetails";
import PropertiesDetail from "./pages/app/properties/PropertiesDetail";




function App() {
  return (
    <Routes>
   

      <Route path="/" element={<DashboardLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="tenants/:id" element={<TenantDetails />} />
        <Route path="landlords/:id" element={<LandLordDetails />} />
        <Route path="properties/:id" element={<PropertiesDetail />} />
        
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
