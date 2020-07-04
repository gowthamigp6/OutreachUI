import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {LoginComponent} from './login/login.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';

const routes: Routes = [
   {path: '',redirectTo: 'login', pathMatch: 'full'},
   {path: 'login',component: LoginComponent},
   {path: "denied",component: AccessDeniedComponent} ,
   {path: "header", component: HeaderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
