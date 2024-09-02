import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../../../interfaces/employee.model';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-display-employees',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './display-employees.component.html',
  styleUrl: './display-employees.component.css'
})
export class DisplayEmployeesComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const employeesParam = params['data'];
      if (employeesParam) {
        try {
          this.employees = JSON.parse(decodeURIComponent(employeesParam));
        } catch (e) {
          console.error('Error parsing employees data', e);
        }
      }
    });
  }
}