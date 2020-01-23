import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-knows-nothing',
  templateUrl: './knows-nothing.component.html',
  styleUrls: ['./knows-nothing.component.css']
})
export class KnowsNothingComponent implements OnInit {
  @Input()
	public counter: number;

	constructor() {}

	ngOnInit() {}

	public plus(): void {
		this.counter++;
	}

	public minus(): void {
		this.counter--;
	}
}
