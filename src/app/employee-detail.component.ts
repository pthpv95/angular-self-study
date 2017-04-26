import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Employee } from './employee';

@Component({
    selector: 'employee-detail-component',
    templateUrl: './employee-detail.component.html',

})

export class EmployeeDetailComponent implements OnInit {
    public employee: any;

    public id: number;
    public subscription: Subscription;

    constructor(
        private employeeService: EmployeeService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.subscription = this.activatedRoute.params.subscribe(params => {
            this.id = params['id'];
        });
        this.employeeService.GetSingleEmployee(this.id).subscribe((employee) => {
            this.employee = employee;
        });
    }
}