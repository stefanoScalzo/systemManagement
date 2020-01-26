import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {MatListModule} from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventPriorityComponent } from './home/event-priority/event-priority.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { SurpassedComponent } from './home/surpassed/surpassed.component';
import {MatDialogModule} from '@angular/material/dialog';

import { EventCreatorComponent } from './home/event-creator/event-creator.component';


@NgModule({
  declarations: [
    AppComponent,
    SurpassedComponent,
    HomeComponent,
    EventPriorityComponent,

    EventCreatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,    
    MatFormFieldModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDatepickerModule,
    ReactiveFormsModule
  ],
  providers: [
    MatNativeDateModule,
    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
