import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarAdminComponent } from './Components/navbar-admin/navbar-admin.component';
import { AgentComponent } from './Admin/agent/agent.component';
import { TabelAgentComponent } from './Components/tabel-agent/tabel-agent.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './Client/home/home.component';
import {NavbarClientComponent} from "./Components/navbar-client/navbar-client.component";
import { LoginComponent } from './Auto/login/login.component';
import { SignUPComponent } from './Auto/sign-up/sign-up.component';
import { LogoutComponent } from './Auto/logout/logout.component';
import { ValidationComponent } from './Auto/validation/validation.component';
import { ForgotPasswordComponent } from './Auto/forgot-password/forgot-password.component';
import { ClientComponent } from './Admin/client/client.component';
import { SocieteComponent } from './Admin/societe/societe.component';
import { TableClientComponent } from './Components/table-client/table-client.component';
import { TableSocieteComponent } from './Components/table-societe/table-societe.component';
import { AgentDashboardComponent } from './Agent/dashboard/agent-dashboard.component';
import { NavbarAgentComponent } from './Components/navbar-agent/navbar-agent.component';
import { NavbarSocieteComponent } from './Components/navbar-societe/navbar-societe.component';
import { CardStatistiqueComponent } from './Components/card-statistique/card-statistique.component';
import { BatterieComponent } from './Agent/batterie/batterie.component';
import { SelectBatterieOrVoitureComponent } from './Components/select-batterie-or-voiture/select-batterie-or-voiture.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarAdminComponent,
    AgentComponent,
    TabelAgentComponent,
    HomeComponent,
    NavbarClientComponent,
    LoginComponent,
    SignUPComponent,
    LogoutComponent,
    ValidationComponent,
    ForgotPasswordComponent,
    ClientComponent,
    SocieteComponent,
    TableClientComponent,
    TableSocieteComponent,
    AgentDashboardComponent,
    NavbarAgentComponent,
    NavbarSocieteComponent,
    CardStatistiqueComponent,
    BatterieComponent,
    SelectBatterieOrVoitureComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
