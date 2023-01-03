import { Component, OnInit } from '@angular/core';
import { EmployeedetailsService } from '../employeedetails.service';

@Component({
  selector: 'app-employedetails',
  templateUrl: './employedetails.component.html',
  styleUrls: ['./employedetails.component.css']
})
export class EmployedetailsComponent implements OnInit {
public displayCreateEmployeeForm = false;
public employee: any = [];
public employeColumn: any = [];
  constructor(private employeeDetailsService: EmployeedetailsService) {
    this.employee = employeeDetailsService.employedetails;
    this.employeColumn = Object.keys(this.employee[0]);
    console.log(this.employee);
  }

  ngOnInit() {
  }

  public createEmployee() {
    this.displayCreateEmployeeForm = true;
  }

}
