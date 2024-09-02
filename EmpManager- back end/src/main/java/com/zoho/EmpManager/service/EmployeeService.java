package com.zoho.EmpManager.service;

import com.zoho.EmpManager.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.zoho.EmpManager.repository.EmployeeRepository;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    // Create a new employee
    public Employee createEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    // Update an existing employee
    public Employee updateEmployee(Long employeeId, Employee updatedEmployee) {
        Employee existingEmployee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new RuntimeException("Employee not found"));

        // Update fields
        existingEmployee.setContactNumber(updatedEmployee.getContactNumber());
        existingEmployee.setName(updatedEmployee.getName());
        existingEmployee.setAge(updatedEmployee.getAge());
        existingEmployee.setPersonalEmailId(updatedEmployee.getPersonalEmailId());
        existingEmployee.setDesignation(updatedEmployee.getDesignation());
        existingEmployee.setDateOfJoining(updatedEmployee.getDateOfJoining());
        existingEmployee.setReportingTo(updatedEmployee.getReportingTo());
        existingEmployee.setDepartment(updatedEmployee.getDepartment());
        existingEmployee.setSalary(updatedEmployee.getSalary());

        return employeeRepository.save(existingEmployee);
    }

    // Get an employee by ID
    public Employee getEmployeeById(Long employeeId) {
        return employeeRepository.findById(employeeId)
                .orElseThrow(() -> new RuntimeException("Employee not found"));
    }

    // Find employees by department
    public List<Employee> getEmployeesByDepartment(String department) {
        return employeeRepository.findByDepartment(department);
    }

    // Find employees by reporting manager
    public List<Employee> getEmployeesByReportingTo(Employee manager) {
        return employeeRepository.findByReportingTo(manager);
    }

    // Find an employee by contact number
    public Employee getEmployeeByContactNumber(String contactNumber) {
        return employeeRepository.findByContactNumber(contactNumber);
    }

    // Find an employee by personal email ID
    public Employee getEmployeeByPersonalEmailId(String personalEmailId) {
        return employeeRepository.findByPersonalEmailId(personalEmailId);
    }

    public boolean isEmployeeExist(Long id ){
        return employeeRepository.existsById(id);
    }


    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public List<Employee> getEmployeesByAge(int age) {
        return employeeRepository.findByAge(age);
    }

    public List<Employee> getEmployeesByAgeRange(int startAge, int endAge) {
        return employeeRepository.findByAgeBetween(startAge, endAge);
    }

    public List<Employee> getEmployeesByDateOfJoining(LocalDate startDate, LocalDate endDate) {
        return employeeRepository.findByDateOfJoiningBetween(startDate, endDate);
    }

    // Get all unique designations
    public Set<String> getAllUniqueDesignations() {
        List<Employee> employees = employeeRepository.findAll();
        return employees.stream()
                .map(Employee::getDesignation)
                .collect(Collectors.toSet());
    }

    // Get employees by designation
    public List<Employee> getEmployeesByDesignation(String designation) {
        return employeeRepository.findByDesignation(designation);
    }

    public List<Employee> findEmployeesBySalaryRange(Integer startSalary, Integer endSalary) {
        return employeeRepository.findBySalaryBetween(startSalary, endSalary);
    }


}

