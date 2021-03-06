import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EmployeeListComponent } from './employee.component';
import { AppComponent } from './app.component';
import { EmployeeService } from './employee.service';
import { HomeComponent } from './home.component';
import { RegisterComponent } from './register.component';
import { NotFoundComponent } from './notfound.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeeProjectComponent } from './employee-projects.component';
import { EmployeeOverviewComponent } from './employee-overview.component';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    HomeComponent,
    RegisterComponent,
    NotFoundComponent,
    EmployeeDetailComponent,
    EmployeeProjectComponent,
    EmployeeOverviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRoutes
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
