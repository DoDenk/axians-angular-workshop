import { OverviewComponent } from './exercise/overview/overview.component';
import { WorkshopAgendaComponent } from './interactive-routing/workshop-agenda/workshop-agenda.component';
import { WorkshopPageTwoComponent } from './interactive-routing/workshop-page-two/workshop-page-two.component';
import { WorkshopPageOneComponent } from './interactive-routing/workshop-page-one/workshop-page-one.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
		WorkshopPageOneComponent,
		WorkshopPageTwoComponent,
		WorkshopAgendaComponent,
		OverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
