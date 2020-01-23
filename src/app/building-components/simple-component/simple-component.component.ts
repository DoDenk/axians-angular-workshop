import { Component, OnInit } from '@angular/core';
const VALUE_HOUR_TO_MILLISCOUND = 3600000;

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

	public calculateWorkTimeLeft(): void {
		const millSecsWorkTime = this.workTime * VALUE_HOUR_TO_MILLISCOUND;
		const currentDate = new Date();
		const timeWorkEnds = new Date(this.myStartTime.getTime()  + millSecsWorkTime);
		this.workTimeLeft = timeWorkEnds.getTime() - currentDate.getTime();
	}

	public getWorktimeAsDate(): number {
		return this.workTimeLeft / VALUE_HOUR_TO_MILLISCOUND;
	}
}
