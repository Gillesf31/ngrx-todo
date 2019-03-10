import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, getReducers } from './store';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(REDUCER_TOKEN)
  ],
  providers: [
    {
      // dependency injection token
      provide: REDUCER_TOKEN,
      useFactory: getReducers
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
