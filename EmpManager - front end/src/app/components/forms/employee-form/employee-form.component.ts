import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {
  @Input() employee: any = {
    name: '',
    age: null,
    contactNumber: '',
    personalEmailId: '',
    designation: '',
    dateOfJoining: '',
    reportingTo: null,
    department: '',
    salary: null
  };
  @Output() formSubmit = new EventEmitter<any>();
  successMessage: string = '';
  errorMessage: string = '';
  isSuccess: boolean = false;
  isError: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    this.saveEmployee(this.employee).subscribe({
      next: (response: any) => {
        this.successMessage = 'Employee data saved successfully!';
        this.isSuccess = true;
        this.isError = false;
        setTimeout(() => {
          this.router.navigate(['/home']); 
        }, 2000); 
      },
      error: (error: any) => {
        this.errorMessage = 'Error saving employee data: ' + (error.message || 'Unknown error');
        this.isSuccess = false;
        this.isError = true;
      },
      complete: () => {
        console.log('Employee save operation completed.');
      }
    });
  }

  saveEmployee(employee: any): Observable<any> {
    return this.http.post('http://localhost:8080/api/employees', employee);
  }

  // This is the common employee form, in which the necessary data will be collected
}

