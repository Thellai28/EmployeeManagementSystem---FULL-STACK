import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../interfaces/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:8080/api/employees';

  constructor(private http: HttpClient) { }

  createEmployee(employeeData: any): Observable<any> {
    return this.http.post(this.apiUrl, employeeData);
  }

  getEmployee(employeeId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${employeeId}`);
  }

  updateEmployee(employeeId: number, employeeData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${employeeId}`, employeeData);
  }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/all`); // Updated URL
  }

  getEmployeesByAge(age: number): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/age/${age}`);
  }

  getEmployeesByAgeRange(startAge: number, endAge: number): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/age-range`, {
      params: {
        startAge: startAge.toString(),
        endAge: endAge.toString()
      }
    });
  }

  getEmployeesByDateOfJoiningRange(startDate: string, endDate: string): Observable<Employee[]> {
    const params = new HttpParams()
      .set('startDate', startDate)
      .set('endDate', endDate);

    return this.http.get<Employee[]>(`${this.apiUrl}/dateOfJoining`, { params });
  }

  getAllDesignations(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/designations`);
  }

  getEmployeesByDesignation(designation: string): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/designation/${designation}`);
  }

  getEmployeesBySalaryRange(startSalary: number, endSalary: number): Observable<Employee[]> {
    // Pass numbers directly to HttpParams
    const params = new HttpParams()
      .set('startSalary', startSalary.toString())  // Convert to string for HTTP
      .set('endSalary', endSalary.toString());    // Convert to string for HTTP

    return this.http.get<Employee[]>(`${this.apiUrl}/salary-range`, { params });
  }

}