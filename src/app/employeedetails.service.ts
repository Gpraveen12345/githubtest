import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeedetailsService {
public employedetails: any = [
  {
    'id': 1,
    'name': 'Jack',
    'email': 'jack@gmail.com',
    'gender': 'male',
    'role': 'Dev',
    'stack':  ' Java'
  },
  {
    'id': 2,
    'name': 'Peter',
    'email': 'peter@gmail.com',
    'gender': 'male',
    'role': 'Dev',
    'stack':  ' Javascript,angular'
  },
  {
    'id': 3,
    'name': 'Mary',
    'email': 'mary@gmail.com',
    'gender': 'female',
    'role': 'QA',
    'stack':  ' selinium'
  },
  {
    'id': 4,
    'name': 'Smith',
    'email': 'smith@gmail.com',
    'gender': 'male',
    'role': 'Dev',
    'stack':  ' Java'
  },
  {
    'id': 5,
    'name': 'John',
    'email': 'john@gmail.com',
    'gender': 'male',
    'role': 'QA',
    'stack':  'selinium'
  }
];
  constructor() { }
}
