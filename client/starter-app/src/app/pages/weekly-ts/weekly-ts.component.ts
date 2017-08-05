import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { WeeklyTsService } from '../../providers/weekly-ts.service'

@Component({
  selector: 'weekly-ts',
  templateUrl: './weekly-ts.component.html',
  styleUrls: ['./weekly-ts.component.scss']
})
export class WeeklyTsComponent implements OnInit {

  month: any;
  weeksArray = [];
  days = [];
  constructor(
    private weeklyTsService: WeeklyTsService
  ) { }

  


  ngOnInit() {
  	this.weeks('2017-02-01');
  }

  updateDays(val, monthNum) {
    this.weeklyTsService.postDate({range: val, month: monthNum});
    this.days = [];
    for (let i = val[0]; i <= val[1]; i++) {
      this.days.push({
        date: i,
        day: moment().month(monthNum - 1).date(i).format('dddd')
      });
    }
  }


  weeks(month) {
    this.month = moment().month(month - 1).format("MMMM");
    if (month < 10) {
      month = '0' + month;
    }
    else {
      month = month.toString();
    }

    var firstDate = moment().month(month - 1).date(1).format('YYYY-MM-DD');

    month = moment(firstDate, 'YYYY-MM-DD');

    var first = month.day() == 0 ? 6 : month.day() - 1;
    var day = 5 - first;

    var last = month.daysInMonth();
    var count = (last - day) / 7;

    if (day > 0) {
      this.weeksArray.push([1, day]);
    }
    day = day + 2;

    for (var i = 0; i < count; i++) {
      this.weeksArray.push([(day + 1), (Math.min(day += 5, last))]);
      day = day + 2;
    }
    return this.weeksArray;
  }
}
