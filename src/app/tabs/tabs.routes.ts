import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'agendar',
        loadComponent: () => import('../agendar/agendar.page').then((m) => m.AgendarPage),
      },
      {
        path: 'meus-horarios',
        loadComponent: () => import('../meus-horarios/meus-horarios.page').then((m) => m.MeusHorariosPage),
      },
      {
        path: 'perfil', // A rota para a página de perfil deve estar aqui
        loadComponent: () => import('../perfil/perfil.page').then((m) => m.PerfilPage),
      },
      {
        path: '',
        redirectTo: 'agendar',
        pathMatch: 'full',
      },
    ],
  },
];