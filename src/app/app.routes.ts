import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';

export const routes: Routes = [


  {path: 'auth', component: AuthLayoutComponent, children: [
    {path: 'signin', component: LoginComponent },
    {path : 'signup', component: RegisterComponent},
    {path: '', redirectTo: 'login', pathMatch: 'full'},
  ]},


  {path: '', component: BlankLayoutComponent, children: [
    
  ]},


  {path: '**', component: NotfoundComponent}
];
