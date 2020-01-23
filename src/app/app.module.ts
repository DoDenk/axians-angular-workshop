import { WorkshopPageTwoComponent } from './InteractiveRouting/WorkshopPageTwo/WorkshopPageTwo.component';
import { WorkshopPageOneComponent } from './InteractiveRouting/WorkshopPageOne/WorkshopPageOne.component';
import { APP_ROUTES } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { WorkshopAgendaComponent } from './InteractiveRouting/WorkshopAgenda/WorkshopAgenda.component';


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
