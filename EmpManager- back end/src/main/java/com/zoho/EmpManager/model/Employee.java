//package com.zoho.EmpManager.model;
//
//import jakarta.persistence.*;
//import lombok.Getter;
//import lombok.Setter;
//
//import java.time.LocalDate;
//
//@Entity
//@Table(name = "Employee")
//@Getter
//@Setter
//public class Employee {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "Employee_id")
//    private Long employeeId;
//
//    @Column(name = "ContactNumber", length = 20)
//    private String contactNumber;
//
//    @Column(name = "Name", length = 100)
//    private String name;
//
//    @Column(name = "Age")
//    private int age;
//
//    @Column(name = "PersonalEmailId", length = 100)
//    private String personalEmailId;
//
//    @Column(name = "Designation", length = 100)
//    private String designation;
//
//    @Column(name = "DateOfJoining")
//    private LocalDate dateOfJoining;
//
//    @ManyToOne
//    @JoinColumn(name = "ReportingTo")
//    private Employee reportingTo;
//
//    @Column(name = "Department", length = 100)
//    private String department;
//
//    @Column(name = "Salary")
//    private Integer salary;  // Changed from BigDecimal to Integer
//
//    // Getter and Setter for employeeId
//    public Long getEmployeeId() {
//        return employeeId;
//    }
//
//    public void setEmployeeId(Long employeeId) {
//        this.employeeId = employeeId;
//    }
//
//    // Getter and Setter for contactNumber
//    public String getContactNumber() {
//        return contactNumber;
//    }
//
//    public void setContactNumber(String contactNumber) {
//        this.contactNumber = contactNumber;
//    }
//
//    // Getter and Setter for name
//    public String getName() {
//        return name;
//    }
//
//    public void setName(String name) {
//        this.name = name;
//    }
//
//    // Getter and Setter for age
//    public int getAge() {
//        return age;
//    }
//
//    public void setAge(int age) {
//        this.age = age;
//    }
//
//    // Getter and Setter for personalEmailId
//    public String getPersonalEmailId() {
//        return personalEmailId;
//    }
//
//    public void setPersonalEmailId(String personalEmailId) {
//        this.personalEmailId = personalEmailId;
//    }
//
//    // Getter and Setter for designation
//    public String getDesignation() {
//        return designation;
//    }
//
//    public void setDesignation(String designation) {
//        this.designation = designation;
//    }
//
//    // Getter and Setter for dateOfJoining
//    public LocalDate getDateOfJoining() {
//        return dateOfJoining;
//    }
//
//    public void setDateOfJoining(LocalDate dateOfJoining) {
//        this.dateOfJoining = dateOfJoining;
//    }
//
//    // Getter and Setter for reportingTo
//    public Employee getReportingTo() {
//        return reportingTo;
//    }
//
//    public void setReportingTo(Employee reportingTo) {
//        this.reportingTo = reportingTo;
//    }
//
//    // Getter and Setter for department
//    public String getDepartment() {
//        return department;
//    }
//
//    public void setDepartment(String department) {
//        this.department = department;
//    }
//
//    // Getter and Setter for salary
//    public Integer getSalary() {
//        return salary;
//    }
//
//    public void setSalary(Integer salary) {
//        this.salary = salary;
//    }
//}





package com.zoho.EmpManager.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name = "Employee")
@Getter
@Setter
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Employee_id")
    private Long employeeId;

    @Column(name = "ContactNumber", length = 20)
    private String contactNumber;

    @Column(name = "Name", length = 100)
    private String name;

    @Column(name = "Age")
    private int age;

    @Column(name = "PersonalEmailId", length = 100)
    private String personalEmailId;

    @Column(name = "Designation", length = 100)
    private String designation;

    @Column(name = "DateOfJoining")
    private LocalDate dateOfJoining;

    @Column(name = "ReportingTo")
    private Integer reportingTo;  // Changed from Employee to Integer

    @Column(name = "Department", length = 100)
    private String department;

    @Column(name = "Salary")
    private Integer salary;  // Changed from BigDecimal to Integer

    // Getter and Setter for employeeId
    public Long getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(Long employeeId) {
        this.employeeId = employeeId;
    }

    // Getter and Setter for contactNumber
    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    // Getter and Setter for name
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    // Getter and Setter for age
    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    // Getter and Setter for personalEmailId
    public String getPersonalEmailId() {
        return personalEmailId;
    }

    public void setPersonalEmailId(String personalEmailId) {
        this.personalEmailId = personalEmailId;
    }

    // Getter and Setter for designation
    public String getDesignation() {
        return designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    // Getter and Setter for dateOfJoining
    public LocalDate getDateOfJoining() {
        return dateOfJoining;
    }

    public void setDateOfJoining(LocalDate dateOfJoining) {
        this.dateOfJoining = dateOfJoining;
    }

    // Getter and Setter for reportingTo
    public Integer getReportingTo() {
        return reportingTo;
    }

    public void setReportingTo(Integer reportingTo) {
        this.reportingTo = reportingTo;
    }

    // Getter and Setter for department
    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    // Getter and Setter for salary
    public Integer getSalary() {
        return salary;
    }

    public void setSalary(Integer salary) {
        this.salary = salary;
    }
}
