import { SimpleComponentComponent } from './building-components/simple-component/simple-component.component';
import { OverviewComponent } from './exercise/overview/overview.component';
import { WorkshopAgendaComponent } from './interactive-routing/workshop-agenda/workshop-agenda.component';
import { WorkshopPageTwoComponent } from './interactive-routing/workshop-page-two/workshop-page-two.component';
import { WorkshopPageOneComponent } from './interactive-routing/workshop-page-one/workshop-page-one.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent,
		WorkshopPageOneComponent,
		WorkshopPageTwoComponent,
		WorkshopAgendaComponent,
		OverviewComponent,
		SimpleComponentComponent
	],
	imports: [ BrowserModule, BrowserAnimationsModule, FormsModule, AppRoutingModule, CalendarModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
