import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleComponent } from './sample/sample.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TreeComponent } from './tree/tree.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path: 'sample',
    component: SampleComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'tree',
    component: TreeComponent
  },
  {
    path: 'table',
    component: TableComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
