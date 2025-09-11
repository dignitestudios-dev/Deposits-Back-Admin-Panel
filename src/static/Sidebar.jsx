// import { category, categoryWhite, dashboard, dashboardWhite, event, eventWhite, help, helpWhite, notification, notificationWhite, report, reportWhite, user, userWhite } from "../assets/export";

import {
  
  dashboard,
  dashboard_blue,

  document,

  

  document_blue,

  

  manageusers,
  manageusers_blue,
  notification,
  notification_Blue,
  Polygon,
  polygon_blue,
  profile,
  profile_blue,
  properties,
  properties_blue,
  reports,
  reports_blue,
  wallet,
  wallet_blue,
  
} from "../assets/export";

export const sidebarData = [
  {
    title: "Dashboard",
    icon: dashboard,
    iconBlue: dashboard_blue,
    link: "/dashboard",
  },
  {
    title: "Properties",
    icon: properties,
    iconBlue: properties_blue,
    link: "/properties",
  },
  {
    title: "Manage Users",
    icon: manageusers,
    iconBlue: manageusers_blue,
   
    children: [
      { title: "Tenants",
        icon: Polygon,
        iconBlue: polygon_blue,
        link: "/tenants" },
      { title: "Landlords",
        icon: Polygon,
        iconBlue: polygon_blue,
        link: "/landlords" },
      
    ],
  },
  {
    title: "Push Notification",
    icon: notification,
    iconBlue: notification_Blue,
    link: "/notification",
  },
  {
    title: "Subscription Management",
    icon: wallet,
    iconBlue: wallet_blue,
    link: "/subscription",
  },
  {
    title: "Block",
    icon: reports,
    iconBlue: reports_blue,
    link: "/block",
  },
  {
    title: "Upload Legal Docs",
    icon: document,
    iconBlue: document_blue,
    link: "/upload-doc",
  },
  {
    title: "Profile Review",
    icon: profile,
    iconBlue: profile_blue,
    link: "/profile-review",
  },
];
