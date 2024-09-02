import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-update-employee-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './update-employee-form.component.html',
  styleUrls: ['./update-employee-form.component.css']
})
export class UpdateEmployeeFormComponent implements OnInit {
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
  private employeeId: number | null = null;

  constructor(
    private http: HttpClient, 
    private router: Router, 
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.employeeId = +id; // Convert id to number
        this.loadEmployee(this.employeeId);
      }
    });
  }

  loadEmployee(id: number): void {
    this.http.get<any>(`http://localhost:8080/api/employees/${id}`).subscribe({
      next: (data: any) => {
        this.employee = data;
        console.log(this.employee);
      },
      error: (error: any) => {
        this.errorMessage = 'Error loading employee data: ' + (error.message || 'Unknown error');
        this.isSuccess = false;
        this.isError = true;
      }
    });
  }

  onSubmit(): void {
    if (this.employeeId !== null) {
      this.saveEmployee(this.employeeId, this.employee).subscribe({
        next: (response: any) => {
          this.successMessage = 'Employee data updated successfully!';
          this.isSuccess = true;
          this.isError = false;
          setTimeout(() => {
            this.router.navigate(['/home']); 
          }, 2000); 
        },
        error: (error: any) => {
          this.errorMessage = 'Error updating employee data: ' + (error.message || 'Unknown error');
          this.isSuccess = false;
          this.isError = true;
        },
        complete: () => {
          console.log('Employee update operation completed.');
        }
      });
    } else {
      this.errorMessage = 'Employee ID is not available.';
      this.isSuccess = false;
      this.isError = true;
    }
  }

  saveEmployee(id: number, employee: any): Observable<any> {
    return this.http.put(`http://localhost:8080/api/employees/${id}`, employee);
  }
}

