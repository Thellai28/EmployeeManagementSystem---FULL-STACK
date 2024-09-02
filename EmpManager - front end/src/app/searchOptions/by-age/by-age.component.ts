import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { Employee } from '../../interfaces/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-by-age',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './by-age.component.html',
  styleUrl: './by-age.component.css'
})
export class ByAgeComponent {
  age: number = 0;
  constructor(private employeeService: EmployeeService, private router: Router) {}

  fetchEmployees(): void {
    
    this.employeeService.getEmployeesByAge(this.age).subscribe({
      next: (employees: Employee[]) => {
        console.log("employee data fetched by age");
        console.log(employees);
        
        this.navigateToDisplayEmployees(employees);
      },
      error: (err) => console.error('Error fetching employees by age', err)
    });
  }

  navigateToDisplayEmployees(employees: Employee[]): void {
    // Serialize and encode the employee data
    const serializedEmployees = encodeURIComponent(JSON.stringify(employees));
    
    // Navigate with query parameters
    this.router.navigate(['/display-employees'], { queryParams: { data: serializedEmployees } });
  }

}
