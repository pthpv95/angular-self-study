import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
    public isLoggIn: boolean;

    IsLogged(): boolean {
        return this.isLoggIn;
    }

    SetLogin(isLoggIn: boolean) {
        this.isLoggIn = isLoggIn;
    }
}