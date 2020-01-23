import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
const VALUE_HOUR_TO_MILLISCOUND = 3600000;

@Injectable({
	providedIn: 'root'
})
export class CalculateService {
	private counter: BehaviorSubject<number> = new BehaviorSubject<number>(0);

	constructor() {}

	public calculateWorkTimeLeft(workTime: number, myStartTime: Date): number {
		const millSecsWorkTime = workTime * VALUE_HOUR_TO_MILLISCOUND;
		const currentDate = new Date();
		const timeWorkEnds = new Date(myStartTime.getTime() + millSecsWorkTime);
		let workTimeLeft = timeWorkEnds.getTime() - currentDate.getTime();
		workTimeLeft = workTimeLeft / VALUE_HOUR_TO_MILLISCOUND;
		return workTimeLeft;
	}

	public setCounter(newCounterValue): void {
		this.counter.next(newCounterValue);
	}

	public getCounter(): Observable<number> {
		return this.counter.asObservable();
	}
}
