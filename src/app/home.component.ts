import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'home-component',
    template: `<h2>This is home component</h2>
                <button (click)="goToEmployee()" class="btn btn-primary">Watch</button>
    `
})

export class HomeComponent {
    constructor(private router: Router) {
    }

    goToEmployee() {
        this.router.navigate(['employees']);
    }
}