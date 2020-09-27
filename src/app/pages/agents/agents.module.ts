import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { AgentsComponent } from './agents.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AgentsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    MatCardModule,
    FlexLayoutModule
  ],
  exports: [
    MatCardModule,
    FlexLayoutModule
  ],
  providers: [],
  entryComponents: [AgentsComponent],
  bootstrap: [AgentsComponent]
})
export class AgentsModule { }
