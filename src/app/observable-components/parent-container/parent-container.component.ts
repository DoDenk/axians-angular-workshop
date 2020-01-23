import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-parent-container',
	templateUrl: './parent-container.component.html',
	styleUrls: [ './parent-container.component.css' ]
})
export class ParentContainerComponent implements OnInit {
	public counter: number;

	constructor() {}

	ngOnInit() {}

	public counterChanged(newCounter: number): void {
		this.counter = newCounter;
	}
}
