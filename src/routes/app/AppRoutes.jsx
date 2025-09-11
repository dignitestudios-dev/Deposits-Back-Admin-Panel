import Block from "../../pages/app/block/Block";
import Dashboard from "../../pages/app/dashboard/Dashboard";
import Landlord from "../../pages/app/landlord/landLord";
import LandLordDetails from "../../pages/app/landlord/LandLordDetails";
import PushNotification from "../../pages/app/notification/PushNotification";
import ProfileReview from "../../pages/app/profile/ProfileReview";
import Properties from "../../pages/app/properties/Properties";
import PropertiesDetail from "../../pages/app/properties/PropertiesDetail";
import Subscription from "../../pages/app/subscription/Subscription";
import Tenant from "../../pages/app/tenant/Tenant";
import TenantDetails from "../../pages/app/tenant/TenantDetails";
import UploadLegalDoc from "../../pages/app/upload doc/UploadLegalDoc";


const appRoutes = [
    {
      url: "dashboard",
      page: Dashboard,
      name: "Dashboard"
    },
    {
      url: "properties",
      page: Properties,
      name: "Properties"
    },
    {
      url: "properties/:id",
      page: PropertiesDetail,
      name: "Properties Detail"
    },
    {
      url: "tenants",
      page: Tenant,
      name: "Tenant"
    },
    {
      url: "notification",
      page: PushNotification,
      name: "Push Notification"
    },
    {
      url: "landlords",
      page: Landlord,
      name: "Landlord"
    },
    {
      url: "landlords/:id",
      page: LandLordDetails,
      name: "Landlord Detail"
    },
    {
      url: "tenants/:id",
      page: TenantDetails,
      name: "Tenant Detail"
    },
    {
      url: "subscription",
      page: Subscription,
      name: "Subscription"
    },
    {
      url: "block",
      page: Block,
      name: "Block"
    },
    {
      url: "upload-doc",
      page: UploadLegalDoc,
      name: "Upload Legal Document"
    },
    {
      url: "profile-review",
      page: ProfileReview,
      name: "Profile Review"
    }
  ];

  export default appRoutes;