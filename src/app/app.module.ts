// MARK: - Core Modules

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// MARK: - Ng2Search Modules

import { Ng2SearchPipeModule } from 'ng2-search-filter';

// MARK: - PrimeNG Modules

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from "primeng/button";


// MARK: - Custom Components

import { MyCardComponent } from './components/my-card/my-card.component';
import { MyGridComponent } from './components/my-grid/my-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCardComponent,
    MyGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
