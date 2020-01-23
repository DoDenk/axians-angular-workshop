import { CalculateService } from './../../../services/calculate.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-parent-container',
	templateUrl: './parent-container.component.html',
	styleUrls: [ './parent-container.component.css' ]
})
export class ParentContainerComponent implements OnInit {
	constructor(private calculateService: CalculateService) {}

	ngOnInit() {}

	public resetCounter(): void {
		this.calculateService.setCounter(0);
	}
}
