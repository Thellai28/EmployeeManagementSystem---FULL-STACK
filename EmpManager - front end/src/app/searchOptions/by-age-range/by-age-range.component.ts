import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-by-age-range',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './by-age-range.component.html',
  styleUrl: './by-age-range.component.css'
})
export class ByAgeRangeComponent {
  startAge: number | null = null;
  endAge: number | null = null;

  constructor(private employeeService: EmployeeService, private router: Router) {}

  fetchEmployeesByAgeRange(): void {
    
    if (this.startAge !== null && this.endAge !== null && this.startAge <= this.endAge) {
      this.employeeService.getEmployeesByAgeRange(this.startAge, this.endAge).subscribe({
        next: (employees) => {
          console.log("Fetched employees between the age range");
          console.log(employees);
          this.navigateToDisplayEmployees(employees);
        },
        error: (err) => console.error('Error fetching employees by age range', err)
      });
    } else {
      alert('Please enter a valid age range.');
    }
  }

  navigateToDisplayEmployees(employees: any[]): void {
    const serializedEmployees = encodeURIComponent(JSON.stringify(employees));
    this.router.navigate(['/display-employees'], { queryParams: { data: serializedEmployees } });
  }
}
