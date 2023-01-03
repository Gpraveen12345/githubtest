import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployedetailsComponent } from '../employedetails/employedetails.component';
import { GridComponent } from '../grid/grid.component';

const routes: Routes = [
{path: 'creteemploye', component: EmployedetailsComponent},
{path: 'employedetails', component: GridComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {


}
