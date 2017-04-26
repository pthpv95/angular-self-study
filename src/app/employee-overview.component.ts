import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'employee-project-component',
    template: '<h3>Overview</h3>'
})

export class EmployeeOverviewComponent implements OnInit {
    public parentRouteId: number;
    public subscription: Subscription;
    constructor(
        private employeeService: EmployeeService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.subscription = this.activatedRoute.parent.params.subscribe(params => {
            this.parentRouteId = params['id'];
        });
    }
}