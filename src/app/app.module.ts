// MARK: - Core Components

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// MARK: - PrimeNG Components

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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
