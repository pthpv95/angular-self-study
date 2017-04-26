import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  public isLoggedIn: boolean;

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.isLoggedIn = this.loginService.IsLogged();
  }

  LogOut() {
    this.loginService.SetLogin(false);
  }
}
