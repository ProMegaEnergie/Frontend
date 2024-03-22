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

@NgModule({
  declarations: [
    AppComponent,
    NavbarAdminComponent,
    AgentComponent,
    TabelAgentComponent,
    HomeComponent,
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