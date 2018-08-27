import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import Home from "views/Home/Home";
import Cartas from "views/Cotas/Cotas";
import SingleCotas from "views/SingleCota/SingleCota";

var indexRoutes = [
  { path: "/landing-page", name: "LandingPage", component: LandingPage },
  { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
  { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path: "/cartas-contempladas", name: "CartasContempladas", component: Cartas },
  { path: "/style-guide", name: "Style Guide", component: Components },
  {
    path: "/cartas-contempladas/:id",
    name: "Detalhe Carta Contemplada",
    component: SingleCotas
  },
  { path: "/", name: "Home", component: Home }
];

export default indexRoutes;
