import { CalculateService } from './../../../services/calculate.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-calculate-for-me',
	templateUrl: './calculate-for-me.component.html',
	styleUrls: [ './calculate-for-me.component.css' ]
})
export class CalculateForMeComponent implements OnInit {
	@Input() public myStartTime: Date;
	@Input() public workTime: number;

	@Output() public worktimeResult: EventEmitter<number> = new EventEmitter();

	constructor(private calculateService: CalculateService) {}

	ngOnInit() {}

	public getWorkTimeLeft(): void {
    const calculatedTime = this.calculateService.calculateWorkTimeLeft(this.workTime, this.myStartTime);
		this.worktimeResult.emit(calculatedTime);
	}
}
