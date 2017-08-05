import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { WeeklyTsService } from '../../providers/weekly-ts.service';
import { LoginService } from '../../providers/login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'weekly-ts',
  templateUrl: './weekly-ts.component.html',
  styleUrls: ['./weekly-ts.component.scss']
})
export class WeeklyTsComponent implements OnInit {

  month: any;
  timesheetData: any;
  weeksArray = [];
  days = [];
  employee:any;
  projectId = '';

  constructor(
    private weeklyTsService: WeeklyTsService,
    private loginService: LoginService,
    private router: Router,
    private route : ActivatedRoute
  ) { }

  dayclick(day){
    let obj = {
      date : day.date,
      status: day.status,
      employeeId: this.employee.id,
      projectId: this.projectId
    }
    this.router.navigate(['/addActivity', obj]);
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.projectId = params.id;
    })
    this.employee = this.loginService.getEmployee();
  }

  updateDays(val, monthNum) {
    let postObject = {
      'startDate': '',
      'toDate': ''
    };    
    postObject.startDate = moment().month(monthNum - 1).date(val[0]).format('YYYY-MM-DD');
    postObject.toDate = moment().month(monthNum - 1).date(val[1]).format('YYYY-MM-DD');      
    this.weeklyTsService.postDate(postObject)
      .then(res => { 
        this.timesheetData = res; 
        this.days = [];
        for (let i = val[0]; i <= val[1]; i++) {
          this.days.push({
            date: i,
            day: moment().month(monthNum - 1).date(i).format('dddd')
          });
        }    
        for (let i = 0; i < 5; i++){
          for (let j = 0; j < this.timesheetData.length; j++) {
            if(this.days[i].day == moment(this.timesheetData[j].date_for_timesheet).format('dddd')) {
              this.days[i].status = this.timesheetData[j].status;              
            }
            else {
              this.days[i].status = '0';
            }
          }
        }    
      });
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
