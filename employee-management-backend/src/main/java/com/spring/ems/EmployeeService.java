package com.spring.ems;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EmployeeService {
    
    @Autowired
    private EmployeeRepository repository;

    public List<Employee> getAllEmployees() {
        return repository.findAll();
    }

    public Employee saveEmployee(Employee employee) {
        return repository.save(employee);
    }

    public Employee updateEmployee(Long id, Employee employee) {

        Employee existingEmployee = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee not found"));

        existingEmployee.setName(employee.getName());
        existingEmployee.setDepartment(employee.getDepartment());
        existingEmployee.setSalary(employee.getSalary());

        return repository.save(existingEmployee);
    }

    public void deleteEmployee(Long id) {
        repository.deleteById(id);
    }
}
