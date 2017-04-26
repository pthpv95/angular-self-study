import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

@Component({
    selector: 'home-component',
    templateUrl: 'login.component.html'
})

export class LoginComponent {
    constructor(
        private router: Router,
        private loginService: LoginService
    ) {
    }

    goToEmployee() {
        this.router.navigate(['employees']);
    }

    checkLogin(value: any) {
        if (value.username == 'admin' && value.password == '123') {
            this.router.navigate(['/']);
            this.loginService.SetLogin(true);
        }
        else {
            alert('log in failed');
        }
    }
}