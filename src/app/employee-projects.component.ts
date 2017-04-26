import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'employee-project-component',
    template:'<h3>Project</h3>'
})

export class EmployeeProjectComponent {
    constructor(private router: Router) {
    }

}