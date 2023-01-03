import { Component, OnInit } from '@angular/core';
import { EmployeedetailsService } from '../employeedetails.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent  {
public employee: any = [];
public employeColumn: any = [];
  constructor(private employeeDetailsService: EmployeedetailsService) {
    this.employee = employeeDetailsService.employedetails;
    this.employeColumn = Object.keys(this.employee[0]);
    console.log(this.employee);
  }
public edit( id: number) {
  console.log(id);
}
public delete( id: number) {
  console.log(id);
}
}
