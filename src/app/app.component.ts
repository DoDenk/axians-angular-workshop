import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	public title: string = 'axians-angular-workshop';
	public auxOpen: boolean = false;

	constructor(private router: Router) {}

	public handleAgenda(): void {
		if (!this.auxOpen) {
      console.log('open aux');
			this.auxOpen = true;
			this.router.navigate([ { outlets: { aux: 'agenda' } } ]);
		} else {
      console.log('close aux');
			this.auxOpen = false;
			this.router.navigate([ '/', { outlets: { aux: null } } ]);
		}
	}
}
