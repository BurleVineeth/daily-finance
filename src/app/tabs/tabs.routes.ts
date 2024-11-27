import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'daily',
        loadComponent: () =>
          import('../daily/daily.page').then((m) => m.DailyPage),
      },
      {
        path: 'stats',
        loadComponent: () =>
          import('../stats/stats.page').then((m) => m.StatsPage),
      },
      {
        path: 'users',
        loadComponent: () =>
          import('../users/users.page').then((m) => m.UsersPage),
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
    ],
  },
];
