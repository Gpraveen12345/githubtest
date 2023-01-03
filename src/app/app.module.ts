import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EmployedetailsComponent } from './employedetails/employedetails.component';
import { GridComponent } from './grid/grid.component';
import { MainRoutingModule } from './main/main-routing.module';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { EmployeedetailsService } from './employeedetails.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployedetailsComponent,
    GridComponent
    
  ],
  imports: [
    BrowserModule,
    MainRoutingModule,
    RouterModule,
    HttpModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
