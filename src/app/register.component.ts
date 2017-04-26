import { Component } from '@angular/core';

@Component({
    selector: 'register-component',
    templateUrl: 'register.component.html',
    styleUrls: ['./app.component.css']
})

export class RegisterComponent {
    title = 'Register Form';
    public cities = [{
        Id: 1,
        Name: 'Ha Noi'
    }, {
        Id: 1,
        Name: 'Ho Chi Minh'
    }];

    onSubmit(value: any) {
        console.log(value);
    }
}