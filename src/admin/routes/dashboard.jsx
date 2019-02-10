// @material-ui/icons
import Person from '@material-ui/icons/Person';

const dashboardRoutes = [
  {
    path: '/criar-carta',
    sidebarName: 'Criar carta',
    navbarName: 'Criar carta',
    icon: Person,
    component: null
  },
  {
    path: '/lista-de-cartas',
    sidebarName: 'Lista de cartas',
    navbarName: 'Lista de cartas',
    icon: Person,
    component: null
  },
  {
    path: '/lista-de-interessados',
    sidebarName: 'Lista de interessados',
    navbarName: 'Lista de interessados',
    icon: Person,
    component: null
  },
  {
    path: '/criar-usuario',
    sidebarName: 'Criar Usuário',
    navbarName: 'Criar Usuário',
    icon: Person,
    component: null
  },
  {
    path: '/parceiros',
    sidebarName: 'Lista de Parceiros',
    navbarName: 'Lista de Parceiros',
    icon: Person,
    component: null
  },
  {
    path: '/lista-de-vendas',
    sidebarName: 'Lista de Vendas',
    navbarName: 'Lista de Vendas',
    icon: Person,
    component: null
  },
  {
    path: '/login',
    sidebarName: 'Sair',
    navbarName: 'Sair',
    icon: Person,
    component: null
  },
  { redirect: true, path: '/', to: '/lista-de-cartas', navbarName: 'Redirect' }
];

export default dashboardRoutes;
