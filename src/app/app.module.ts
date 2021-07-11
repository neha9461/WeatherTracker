import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DataTrackerComponent } from './datatracker/data-tracker.component';
import { ForcastComponent } from './forcast/forcast.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, DataTrackerComponent, ForcastComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
