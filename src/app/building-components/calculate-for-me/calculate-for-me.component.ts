import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
const VALUE_HOUR_TO_MILLISCOUND = 3600000;

@Component({
	selector: 'app-calculate-for-me',
	templateUrl: './calculate-for-me.component.html',
	styleUrls: [ './calculate-for-me.component.css' ]
})
export class CalculateForMeComponent implements OnInit {
	@Input() public myStartTime: Date;
	@Input() public workTime: number;

	@Output() public worktimeResult: EventEmitter<number> = new EventEmitter();

	private workTimeLeft: number = null;

	constructor() {}

	ngOnInit() {}

	public calculateWorkTimeLeft(): void {
		const millSecsWorkTime = this.workTime * VALUE_HOUR_TO_MILLISCOUND;
		const currentDate = new Date();
		const timeWorkEnds = new Date(this.myStartTime.getTime() + millSecsWorkTime);
    this.workTimeLeft = timeWorkEnds.getTime() - currentDate.getTime();
    this.workTimeLeft = this.workTimeLeft / VALUE_HOUR_TO_MILLISCOUND;
    this.worktimeResult.emit(this.workTimeLeft);
	}
}
