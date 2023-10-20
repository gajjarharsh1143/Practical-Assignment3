import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntegerDisplayComponent } from './integer-display/integer-display.component';
import { ArrayDisplayComponent } from './array-display/array-display.component';
import { ComboDisplayComponent } from './combo-display/combo-display.component';
import { UserInputFormComponent } from './user-input-form/user-input-form.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IntegerDisplayComponent,
    ArrayDisplayComponent,
    ComboDisplayComponent,
    UserInputFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
