import { CalculateService } from './../../../services/calculate.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
	selector: 'app-knows-everything',
	templateUrl: './knows-everything.component.html',
	styleUrls: [ './knows-everything.component.css' ]
})
export class KnowsEverythingComponent implements OnInit, OnDestroy {
	public counter: number;

	private subscription: Subscription;

	constructor(private calculateService: CalculateService) {}

	ngOnInit() {
		this.calculateService.getCounter().subscribe((newCounterValue) => {
			console.log('new value: ' + newCounterValue);
			this.counter = newCounterValue;
		});
	}

	ngOnDestroy(): void {
		if (this.subscription) {
			this.subscription.unsubscribe();
		}
	}

	public plus(): void {
		this.calculateService.setCounter(this.counter + 1);
	}

	public minus(): void {
		this.calculateService.setCounter(this.counter - 1);
	}
}
