import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AgentComponent} from "./Admin/agent/agent.component";
import {HomeComponent} from "./Client/home/home.component";

const routes: Routes = [
  //Agent


  //Client
  { path: '', component: HomeComponent},
  { path: 'Home', component: HomeComponent},
  { path: 'CL/Home', component: HomeComponent},

  //Admin
  { path: 'AD/Agent', component: AgentComponent},

  //Societe

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
