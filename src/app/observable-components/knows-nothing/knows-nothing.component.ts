import { CalculateService } from './../../../services/calculate.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-knows-nothing',
	templateUrl: './knows-nothing.component.html',
	styleUrls: [ './knows-nothing.component.css' ]
})
export class KnowsNothingComponent implements OnInit, OnDestroy {
	public counter: number;

	private subscription: Subscription;

	constructor(private calculateService: CalculateService) {}

	ngOnInit() {
		this.calculateService.getCounter().subscribe((newCounterValue) => {
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
