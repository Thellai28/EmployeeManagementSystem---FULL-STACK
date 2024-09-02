import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { Employee } from '../../interfaces/employee.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-by-designation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './by-designation.component.html',
  styleUrl: './by-designation.component.css'
})
export class ByDesignationComponent {

  designations: string[] = [];
  selectedDesignation: string = '';

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.loadDesignations();
  }

  loadDesignations(): void {
    this.employeeService.getAllDesignations().subscribe({
      next: (data: string[]) => this.designations = data,
      error: (err) => console.error('Error fetching designations', err)
    });
  }

  fetchEmployees(): void {
    if (this.selectedDesignation) {
      this.employeeService.getEmployeesByDesignation(this.selectedDesignation).subscribe({
        next: (employees) => this.navigateToDisplayEmployees(employees),
        error: (err) => console.error('Error fetching employees', err)
      });
    }
  }

  navigateToDisplayEmployees(employees: Employee[]): void {
    const serializedEmployees = encodeURIComponent(JSON.stringify(employees));
    this.router.navigate(['/display-employees'], { queryParams: { data: serializedEmployees } });
  }

}
