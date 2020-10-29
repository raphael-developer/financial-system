import Dashboard from "../views/Dashboard";
import Titulos from "../views/Titulos";
import Login from "../views/Login";
import NaturezaLancamento from "../views/NaturezaLancamento";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    title: "Dashboard",
    icon: "mdi-view-dashboard",
    meta: {
      requiredAuth: true,
    },
  },

  {
    path: "/titulos",
    name: "Titulos",
    component: Titulos,
    title: "Títulos",
    icon: "mdi-cash-multiple",
    meta: {
      requiredAuth: true,
    },
  },

  {
    path: "/natureza-lancamento",
    name: "NaturezaLancamento",
    component: NaturezaLancamento,
    title: "Natureza",
    icon: "mdi-vector-rectangle",
    meta: {
      requiredAuth: true,
    },
  },

  {
    path: "/login",
    name: "Login",
    component: Login,
    title: "Login",
    icon: "mdi-account-arrow-right",
    meta: {
      requiredAuth: false,
    },
  },
];

export default routes;
