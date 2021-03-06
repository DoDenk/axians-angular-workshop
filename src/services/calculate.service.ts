import { Injectable } from '@angular/core';
const VALUE_HOUR_TO_MILLISCOUND = 3600000;

@Injectable({
	providedIn: 'root'
})
export class CalculateService {
	constructor() {}

	public calculateWorkTimeLeft(workTime: number, myStartTime: Date): number {
		const millSecsWorkTime = workTime * VALUE_HOUR_TO_MILLISCOUND;
		const currentDate = new Date();
		const timeWorkEnds = new Date(myStartTime.getTime() + millSecsWorkTime);
		let workTimeLeft = timeWorkEnds.getTime() - currentDate.getTime();
		workTimeLeft = workTimeLeft / VALUE_HOUR_TO_MILLISCOUND;
		return workTimeLeft;
	}
}
