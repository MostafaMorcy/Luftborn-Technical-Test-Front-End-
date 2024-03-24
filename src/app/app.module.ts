import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeTrackerComponent } from './time-tracker/time-tracker.component';
import { TimeTrackerService } from './time-tracker/time-tracker.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, TimeTrackerComponent],
  imports: [HttpClientModule, BrowserModule, AppRoutingModule],
  providers: [TimeTrackerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
