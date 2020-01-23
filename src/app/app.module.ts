import { WorkshopAgendaComponent } from './interactive-routing/workshop-agenda/workshop-agenda.component';
import { WorkshopPageTwoComponent } from './interactive-routing/workshop-page-two/workshop-page-two.component';
import { WorkshopPageOneComponent } from './interactive-routing/workshop-page-one/workshop-page-one.component';
import { APP_ROUTES } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    WorkshopPageOneComponent,
    WorkshopPageTwoComponent,
    WorkshopAgendaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
