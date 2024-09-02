import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmployeeFormComponent } from '../../forms/employee-form/employee-form.component';
import { EmployeeService } from '../../../services/employee.service';


@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [CommonModule, EmployeeFormComponent], 
  templateUrl: './create-employee.component.html' ,
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
  constructor(private employeeService: EmployeeService, private router: Router) {}

  onSubmit(employeeData: any) {
    this.employeeService.createEmployee(employeeData).subscribe({
      next: (response: any) => {
        console.log('Employee created successfully', response);
        alert(`Employee created successfully with ID: ${response.employeeId}`);
        this.router.navigate(['/']);
      },
      error: (error: any) => {
        console.error('Error creating employee', error);
        alert('Error creating employee. Please try again.');
      },
      complete: () => {
        console.log('Employee creation process completed.');
      }
    });
  }
}




