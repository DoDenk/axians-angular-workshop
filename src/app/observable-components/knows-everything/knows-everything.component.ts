import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-knows-everything',
	templateUrl: './knows-everything.component.html',
	styleUrls: [ './knows-everything.component.css' ]
})
export class KnowsEverythingComponent implements OnInit {
	public counter: number = 0;

	@Output() public counterChanged: EventEmitter<number> = new EventEmitter();

	constructor() {}

	ngOnInit() {}

	public plus(): void {
    this.counter++;
    this.counterChanged.emit(this.counter);
	}

	public minus(): void {
		this.counter--;
    this.counterChanged.emit(this.counter);
	}
}
