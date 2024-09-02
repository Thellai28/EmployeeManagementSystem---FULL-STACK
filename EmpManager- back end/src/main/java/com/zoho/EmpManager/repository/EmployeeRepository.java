package com.zoho.EmpManager.repository;

import com.zoho.EmpManager.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    // Find employees by department
    List<Employee> findByDepartment(String department);

    // Find employees by reporting manager
    List<Employee> findByReportingTo(Employee manager);

    // Find employees by contact number
    Employee findByContactNumber(String contactNumber);

    // Find employees by email ID
    Employee findByPersonalEmailId(String personalEmailId);

    List<Employee> findByAge(int age);

    List<Employee> findByDateOfJoiningBetween(LocalDate startDate, LocalDate endDate);

    List<Employee> findByAgeBetween(int startAge, int endAge);

    List<Employee> findByDesignation(String designation);

    List<Employee> findBySalaryBetween(Integer startSalary, Integer endSalary);


}
