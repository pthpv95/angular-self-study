import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
    selector: 'employee-list',
    templateUrl: './employee.component.html',

})

export class EmployeeListComponent implements OnInit {
    constructor(
        private employeeService: EmployeeService
    ) { }
    public employees: any[];

    ngOnInit() {
        this.employeeService.GetList().subscribe((response: any) => {
            this.employees = response;
        }, error => {
            console.log("System API error");
        });
    }
}