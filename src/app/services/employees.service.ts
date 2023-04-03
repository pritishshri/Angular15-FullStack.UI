import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  baseApiURL: string = environment.baseApiUrl;

  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseApiURL + '/api/employees');
  }

  addEmployee(addEmployeeRequest: Employee): Observable<Employee> {
    return this.http.post<Employee>(
      this.baseApiURL + '/api/employees',
      addEmployeeRequest
    );
  }

  getEmployeeById(id: string): Observable<Employee> {
    return this.http.get<Employee>(this.baseApiURL + '/api/employees/' + id);
  }

  updateEmployee(
    id: string,
    requestedEmployee: Employee
  ): Observable<Employee> {
    return this.http.put<Employee>(
      this.baseApiURL + '/api/employees/' + id,
      requestedEmployee
    );
  }

  deleteEmployee(id: string): Observable<Employee> {
   return this.http.delete<Employee>(this.baseApiURL + '/api/employees/' + id);
  }
}
