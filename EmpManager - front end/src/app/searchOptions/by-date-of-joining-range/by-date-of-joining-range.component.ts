import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../interfaces/employee.model';


@Component({
  selector: 'app-by-date-of-joining-range',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './by-date-of-joining-range.component.html',
  styleUrl: './by-date-of-joining-range.component.css'
})
export class ByDateOfJoiningRangeComponent {
  startDate: string = '';
  endDate: string = '';

  constructor(private employeeService: EmployeeService, private router: Router) {}

  fetchEmployees(): void {
    if (this.startDate && this.endDate) {
      this.employeeService.getEmployeesByDateOfJoiningRange(this.startDate, this.endDate).subscribe({
        next: (data : Employee[]) => {
          console.log("Employees fetched between a data of joining range");
          console.log(data);
          this.navigateToDisplayEmployees(data)
        },
        error: (err) => console.error('Error fetching employees', err)
      });
    } else {
      alert('Please enter both start and end dates.');
    }
  }

  navigateToDisplayEmployees(employees: any[]): void {
    const serializedEmployees = encodeURIComponent(JSON.stringify(employees));
    this.router.navigate(['/display-employees'], { queryParams: { data: serializedEmployees } });
  }

}
