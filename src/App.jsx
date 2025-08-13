import { Route, Routes } from "react-router";
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




function App() {
  return (
    <Routes>
   

      <Route path="/" element={<DashboardLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="tenants/:id" element={<TenantDetails />} />
        <Route path="landlords/:id" element={<LandLordDetails />} />
        <Route path="properties" element={<Properties />} />
        <Route path="properties/:id" element={<PropertiesDetail />} />
        <Route path="tenants" element={<Tenant />} />
        <Route path="landlords" element={<Landlord />} />
        <Route path="notification" element={<PushNotification />} />
        <Route path="subscription" element={<Subscription />} />
        <Route path="block" element={<Block />} />
        <Route path="upload-doc" element={<UploadLegalDoc />} />
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
