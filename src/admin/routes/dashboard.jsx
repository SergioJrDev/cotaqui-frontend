// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";

import Notifications from "@material-ui/icons/Notifications";
// core components/views
import DashboardPage from "./../views/Dashboard/Dashboard.jsx";
import UserProfile from "./../views/UserProfile/UserProfile.jsx";
import TableList from "./../views/TableList/TableList.jsx";
import NotificationsPage from "./../views/Notifications/Notifications.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Material Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/user",
    sidebarName: "Criar carta",
    navbarName: "Criar carta",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/user/:id",
    sidebarName: "Editar Carta carta",
    navbarName: "Editar Carta carta",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/table",
    sidebarName: "Lista de cartas",
    navbarName: "Lista de cartas",
    icon: "content_paste",
    component: TableList
  },
  {
    path: "/notifications",
    sidebarName: "Notifications",
    navbarName: "Notifications",
    icon: Notifications,
    component: NotificationsPage
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
