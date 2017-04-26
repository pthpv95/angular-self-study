import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()

export class EmployeeService {
    private apiUrl = "http://58fef2b10dcf7e00111705ba.mockapi.io/api/Employee/";
    constructor(private http: Http) { }
    GetList(): Observable<any[]> {
        return this.http.get(this.apiUrl).map((response: Response) => response.json());
    }

    GetSingleEmployee(id: number): Observable<any> {
        return this.http.get(this.apiUrl + id).map((response: Response) => response.json());
    }
}