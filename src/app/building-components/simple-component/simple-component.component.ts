import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-simple-component',
	templateUrl: './simple-component.component.html',
	styleUrls: [ './simple-component.component.css' ]
})
export class SimpleComponentComponent implements OnInit {
	public myStartTime: Date;
	public workTime: number;
	public workTimeLeft: number = null;

	constructor() {}

	ngOnInit() {}

  public workTimeValueChanged(newValue:number): void {
		this.workTimeLeft = newValue;
	}
}
