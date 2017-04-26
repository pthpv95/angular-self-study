import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { EmployeeListComponent } from './employee.component';
import { RegisterComponent } from './register.component';
import { NotFoundComponent } from './notfound.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeeProjectComponent } from './employee-projects.component';
import { EmployeeOverviewComponent } from './employee-overview.component';

const routing: Routes = [
    { path: '', component: HomeComponent },
    { path: 'employees', component: EmployeeListComponent },
    { path: 'register', component: RegisterComponent },
    {
        path: 'employee-detail/:id', component: EmployeeDetailComponent, children: [
            { path: 'overview', component: EmployeeOverviewComponent },
            { path: 'projects', component: EmployeeProjectComponent }
        ]
    },
    { path: '**', component: NotFoundComponent },
]

export const appRoutes = RouterModule.forRoot(routing);