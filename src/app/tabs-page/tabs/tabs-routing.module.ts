import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'heroes',
    component: TabsPage,
    children: [
      {
        path: 'horde',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then((m) => m.Tab1PageModule),
          },
        ],
      },
      {
        path: 'alliance',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then((m) => m.Tab2PageModule),
          },
        ],
      },
      {
        path: 'other',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then((m) => m.Tab3PageModule),
          },
        ],
      },
      {
        path: '',
        redirectTo: '/heroes/alliance',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/heroes/alliance',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
