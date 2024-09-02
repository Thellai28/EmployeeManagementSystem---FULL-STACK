import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../interfaces/employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-employees',
  standalone: true,
  imports: [],
  template:'',
})
export class AllEmployeesComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    console.log('enterd the loadEmployees block');
    this.employeeService.getAllEmployees().subscribe({
      next: (data: Employee[]) => {
        this.employees = data;
        console.log('Employees fetched successfully');
        this.navigateToDisplayEmployees(this.employees);
      },
      error: (err) => console.error('Error fetching employees', err)
    });
  }

  navigateToDisplayEmployees(employees: Employee[]): void {
    // Serialize and encode the employee data
    const serializedEmployees = encodeURIComponent(JSON.stringify(employees));
    
    // Navigate with query parameters
    this.router.navigate(['/display-employees'], { queryParams: { data: serializedEmployees } });
  }
}