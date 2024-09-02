import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../interfaces/employee.model';


@Component({
  selector: 'app-by-salary-range',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './by-salary-range.component.html',
  styleUrls: ['./by-salary-range.component.css']
})
export class BySalaryRangeComponent {
  startSalary: number | null = null;
  endSalary: number | null = null;

  constructor(private employeeService: EmployeeService, private router: Router) {}

  fetchEmployeesBySalaryRange(): void {
    if (this.startSalary !== null && this.endSalary !== null && this.startSalary <= this.endSalary) {
  
      this.employeeService.getEmployeesBySalaryRange(this.startSalary, this.endSalary).subscribe({
        next: (employees: Employee[]) => {
          console.log("Fetched employees within the salary range");
          console.log(employees);
          this.navigateToDisplayEmployees(employees);
        },
        error: (err) => {
          console.error('Error fetching employees by salary range', err);
          alert('Failed to fetch employees. Please try again.');
        }
      });
    } else {
      alert('Please enter a valid salary range.');
    }
  }

  navigateToDisplayEmployees(employees: Employee[]): void {
    const serializedEmployees = encodeURIComponent(JSON.stringify(employees));
    this.router.navigate(['/display-employees'], { queryParams: { data: serializedEmployees } });
  }
}
