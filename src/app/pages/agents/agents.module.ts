import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { AgentsComponent } from './agents.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AgentsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AgentsComponent]
})
export class AgentsModule { }
