import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AgentComponent} from "./Admin/agent/agent.component";
import {ClientComponent} from "./Admin/client/client.component";
import {SocieteComponent} from "./Admin/societe/societe.component";
import {HomeComponent} from "./Client/home/home.component";
import {LoginComponent} from "./Auto/login/login.component";
import {LogoutComponent} from "./Auto/logout/logout.component";
import {SignUPComponent} from "./Auto/sign-up/sign-up.component";
import {ValidationComponent} from "./Auto/validation/validation.component";
import {ForgotPasswordComponent} from "./Auto/forgot-password/forgot-password.component";
import {AgentDashboardComponent} from "./Agent/dashboard/agent-dashboard.component";
import {BatterieComponent} from "./Agent/batterie/batterie.component";

const routes: Routes = [
  //Agent
  { path: 'AG/Dashboard', component: AgentDashboardComponent},
  { path: 'AG/Batterie', component: BatterieComponent},
  //Client
  { path: '', component: HomeComponent},
  { path: 'Home', component: HomeComponent},
  { path: 'CL/Home', component: HomeComponent},
  { path: 'CL/Voiture', component: HomeComponent},

  //Admin
  { path: 'AD/Agent', component: AgentComponent},
  { path: 'AD/Client', component: ClientComponent},
  { path: 'AD/Societe', component: SocieteComponent},

  //Societe

  //User
  { path: 'User/logout', component: LogoutComponent},
  { path: 'User/login', component: LoginComponent},
  { path: 'User/signUp', component: SignUPComponent},
  { path: 'User/Activate', component: ValidationComponent},
  { path: 'User/Forgot-Password', component: ForgotPasswordComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
