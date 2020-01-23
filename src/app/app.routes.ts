import { WorkshopPageTwoComponent } from './interactive-routing/workshop-page-two/workshop-page-two.component';
import { WorkshopPageOneComponent } from './interactive-routing/workshop-page-one/workshop-page-one.component';
import { OverviewComponent } from './exercise/overview/overview.component';
import { Routes } from '@angular/router';
import { WorkshopAgendaComponent } from './interactive-routing/workshop-agenda/workshop-agenda.component';

export const APP_ROUTES: Routes = [
	{
		path: '',
		redirectTo: 'exercise',
		pathMatch: 'full'
	},
	{
		path: 'exercise',
		component: OverviewComponent
	},
	{
		path: 'page1',
		component: WorkshopPageOneComponent
  },
  {
		path: 'page2',
		component: WorkshopPageTwoComponent
  },
  {
		path: 'agenda',
		component: WorkshopAgendaComponent
	},
	{
		path: '**',
		redirectTo: 'home'
	}
];
