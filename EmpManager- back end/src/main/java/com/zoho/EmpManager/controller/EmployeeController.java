package com.zoho.EmpManager.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.zoho.EmpManager.model.Employee;
import com.zoho.EmpManager.service.EmployeeService;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.Set;

@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping
    public ResponseEntity<Employee> createEmployee(@RequestBody Map<String, Object> employeeData) {
        // Extract and map data to Employee object
        Employee employee = mapToEmployee(employeeData);
        return ResponseEntity.ok(employeeService.createEmployee(employee));
    }

    @PutMapping("/{employeeId}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long employeeId, @RequestBody Map<String, Object> employeeData) {
        // Extract and map data to Employee object
        Employee updatedEmployee = mapToEmployee(employeeData);
//        updatedEmployee.setEmployeeId(employeeId);
        return ResponseEntity.ok(employeeService.updateEmployee(employeeId, updatedEmployee));
    }

    @GetMapping("/{employeeId}")
    public ResponseEntity<Employee> getEmployee(@PathVariable Long employeeId) {
        return ResponseEntity.ok(employeeService.getEmployeeById(employeeId));
    }

    // Add more endpoints for searching based on different criteria

    @GetMapping("/department/{department}")
    public ResponseEntity<List<Employee>> getEmployeesByDepartment(@PathVariable String department) {
        return ResponseEntity.ok(employeeService.getEmployeesByDepartment(department));
    }

    @GetMapping("/reportingTo/{managerId}")
    public ResponseEntity<List<Employee>> getEmployeesByReportingTo(@PathVariable Long managerId) {
        Employee manager = employeeService.getEmployeeById(managerId);
        return ResponseEntity.ok(employeeService.getEmployeesByReportingTo(manager));
    }

    @GetMapping("/contactNumber/{contactNumber}")
    public ResponseEntity<Employee> getEmployeeByContactNumber(@PathVariable String contactNumber) {
        return ResponseEntity.ok(employeeService.getEmployeeByContactNumber(contactNumber));
    }

    @GetMapping("/personalEmail/{personalEmailId}")
    public ResponseEntity<Employee> getEmployeeByPersonalEmailId(@PathVariable String personalEmailId) {
        return ResponseEntity.ok(employeeService.getEmployeeByPersonalEmailId(personalEmailId));
    }

    // Helper method to map request data to Employee entity
    private Employee mapToEmployee(Map<String, Object> employeeData) {
        Employee employee = new Employee();
        employee.setContactNumber((String) employeeData.get("contactNumber"));
        employee.setName((String) employeeData.get("name"));
        employee.setPersonalEmailId((String) employeeData.get("personalEmailId"));  // Changed from personalEmailId to personalEmail
        employee.setDesignation((String) employeeData.get("designation"));

        employee.setDepartment((String) employeeData.get("department"));

        // Convert date string to LocalDate
        String dateOfJoiningStr = (String) employeeData.get("dateOfJoining");
        if (dateOfJoiningStr != null && !dateOfJoiningStr.isEmpty()) {
            employee.setDateOfJoining(LocalDate.parse(dateOfJoiningStr));
        }

        // Salary is an integer,
        Object salaryObj = employeeData.get("salary");
        if (salaryObj instanceof Number) {
            employee.setSalary(((Number) salaryObj).intValue());
        }

        // Age is an integer :
        Object ageObj = employeeData.get("age");
        if( ageObj instanceof Number ){
            employee.setAge(((Number) ageObj).intValue());
        }

        Object reportingToObj = employeeData.get("reportingTo");
        if (reportingToObj instanceof String) {
            try {
                Integer reportingToId = Integer.valueOf((String) reportingToObj);
                if (employeeService.isEmployeeExist(reportingToId.longValue())) {
                    employee.setReportingTo(reportingToId);
                }
            } catch (NumberFormatException e) {
                System.out.println("Invalid reportingTo ID: " + reportingToObj);
            }
        }


        return employee;
    }

    // Endpoint to get all employees
    @GetMapping("/all")
    public List<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    @GetMapping("/age/{age}")
    public ResponseEntity<List<Employee>> getEmployeesByAge(@PathVariable int age) {
        List<Employee> employees = employeeService.getEmployeesByAge(age);
        return ResponseEntity.ok(employees);
    }

    @GetMapping("/age-range")
    public ResponseEntity<List<Employee>> getEmployeesByAgeRange(
            @RequestParam int startAge,
            @RequestParam int endAge) {
        return ResponseEntity.ok(employeeService.getEmployeesByAgeRange(startAge, endAge));
    }

    @GetMapping("/dateOfJoining")
    public ResponseEntity<List<Employee>> getEmployeesByDateOfJoiningRange(
            @RequestParam LocalDate startDate,
            @RequestParam LocalDate endDate) {
        return ResponseEntity.ok(employeeService.getEmployeesByDateOfJoining(startDate, endDate));
    }

    @GetMapping("/designations")
    public ResponseEntity<Set<String>> getAllDesignations() {
        return ResponseEntity.ok(employeeService.getAllUniqueDesignations());
    }

    @GetMapping("/designation/{designation}")
    public ResponseEntity<List<Employee>> getEmployeesByDesignation(@PathVariable String designation) {
        return ResponseEntity.ok(employeeService.getEmployeesByDesignation(designation));
    }

    @GetMapping("/salary-range")
    public ResponseEntity<List<Employee>> getEmployeesBySalaryRange(
            @RequestParam int startSalary,
            @RequestParam int endSalary) {
        return ResponseEntity.ok(employeeService.findEmployeesBySalaryRange(startSalary, endSalary));
    }




}
