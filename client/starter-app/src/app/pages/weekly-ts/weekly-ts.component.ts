import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'

@Component({
  selector: 'weekly-ts',
  templateUrl: './weekly-ts.component.html',
  styleUrls: ['./weekly-ts.component.scss']
})
export class WeeklyTsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	this.weeks('2017-02-01');
  }

  weeks (month) {
	    month = moment(month, 'YYYY-MM-DD');

	    var first = month.day() == 0 ? 6 : month.day()-1;
	    var day = 5-first;

	    var last = month.daysInMonth();
	    var count = (last-day)/7;

	    var weeks = [];
	    if ( day > 0) {
	    	weeks.push([1, day]);
	    }
	    day = day + 2;

	    for (var i=0; i < count; i++) {
	        weeks.push([(day+1), (Math.min(day+=5, last))]);
	        day = day+2;   
	    }
	    return weeks;
 }
}
