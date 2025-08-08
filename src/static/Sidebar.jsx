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
  properties,
  properties_blue,
  reports,
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
    link: "/manageusers",
    children: [
      { title: "Admins",
        icon: Polygon,
        iconBlue: polygon_blue,
        link: "/manageusers/admins" },
      { title: "Service Providers",
        icon: Polygon,
        iconBlue: polygon_blue,
        link: "/manageusers/service-providers" },
      
    ],
  },
  {
    title: "Push Notification",
    icon: notification,
    iconBlue: notification_Blue,
    link: "/pushNotification",
  },
  {
    title: "Subscription Management",
    icon: wallet,
    iconBlue: wallet_blue,
    link: "/pushNotification",
  },
  {
    title: "Block",
    icon: reports,
    iconBlue: reports,
    link: "/report",
  },
  {
    title: "Upload Legal Docs",
    icon: document,
    iconBlue: document_blue,
    link: "/uploadLegalDocs",
  },
];
