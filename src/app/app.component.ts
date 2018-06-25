import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	text = 0;
	counter1: Observable<any>;
	counter2: Observable<any>;
	stop = false;

	onStart () {
	  if ( !this.stop ) {
	  this.counter1 = interval(1000);
		this.counter1
			.pipe(takeWhile(() => !this.stop))
			.subscribe( val => this.text = val);
		}
	}

	onStop() {
		this.stop = true;
	}

	calcStop(): boolean {
		return !this.stop;
	}
}
