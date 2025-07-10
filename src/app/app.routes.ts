import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'features/auth/pages/login',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'features/auth/pages/login',
    loadComponent: () => import('./features/auth/pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'features/auth/pages/cadastro',
    loadComponent: () => import('./features/auth/pages/cadastro/cadastro.page').then( m => m.CadastroPage)
  },
  // As rotas abaixo compõem a jornada de agendamento
  {
    path: 'escolher-barbeiro',
    loadComponent: () => import('./escolher-barbeiro/escolher-barbeiro.page').then( m => m.EscolherBarbeiroPage)
  },
  {
    path: 'escolher-data-hora',
    loadComponent: () => import('./escolher-data-hora/escolher-data-hora.page').then( m => m.EscolherDataHoraPage)
  },
  // ESTA É A ROTA QUE PROVAVELMENTE ESTAVA EM FALTA
  {
    path: 'confirmar-agendamento',
    loadComponent: () => import('./confirmar-agendamento/confirmar-agendamento.page').then( m => m.ConfirmarAgendamentoPage)
  },
];