import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { EmployeeListComponent } from './employee.component';
import { RegisterComponent } from './register.component';
import { NotFoundComponent } from './notfound.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeeProjectComponent } from './employee-projects.component';
import { EmployeeOverviewComponent } from './employee-overview.component';
import { LoginComponent } from './login.componenent';
import { CheckLoginGuard } from './guards/check-login.guard';
import { CheckSaveFormGuard } from './guards/check-save-form.guard';

const routing: Routes = [
    { path: '', component: HomeComponent },
    { path: 'employees', component: EmployeeListComponent, canActivate: [CheckLoginGuard] },
    { path: 'register', component: RegisterComponent },
    {
        path: 'employee-detail/:id', component: EmployeeDetailComponent, children: [
            { path: 'overview', component: EmployeeOverviewComponent },
            { path: 'projects', component: EmployeeProjectComponent }
        ], canDeactivate: [CheckSaveFormGuard]
    },
    { path: 'login', component: LoginComponent },
    { path: '**', component: NotFoundComponent },
]

export const appRoutes = RouterModule.forRoot(routing);