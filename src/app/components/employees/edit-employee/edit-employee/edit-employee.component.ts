import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent implements OnInit {
  returnedEmployee: Employee = {
    id: '00000000-0000-0000-0000-000000000000',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: '',
  };

  constructor(private route: ActivatedRoute, private employeeservice: EmployeesService, private router:Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.employeeservice.getEmployeeById(id).subscribe({
            next: (response) => {
              this.returnedEmployee = response;
            },
          });
        }

      },
    });
  }

  updateEmployee() {
    this.employeeservice.updateEmployee(this.returnedEmployee.id, this.returnedEmployee).subscribe({
      next: (response) => {
        this.router.navigate(['employees']);
      }
    });
  }

  deleteEmployee(id: string) {
    this.employeeservice.deleteEmployee(this.returnedEmployee.id).subscribe({
      next: (response) => {
        this.router.navigate(['employees']);
      }
    });
  }

}
