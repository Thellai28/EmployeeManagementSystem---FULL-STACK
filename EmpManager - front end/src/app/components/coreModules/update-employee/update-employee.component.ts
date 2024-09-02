import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../../services/employee.service';



@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {
  employeeId: number | null = null;

  constructor(private employeeService: EmployeeService, private router: Router) {}

  fetchEmployee() {
    if (this.employeeId) {
      // Navigate to the UpdateEmployeeFormComponent with the employee ID in the URL
      this.router.navigate([`/fetch-update/${this.employeeId}`]);
    } else {
      alert('Please enter a valid Employee ID.');
    }
  }
}
