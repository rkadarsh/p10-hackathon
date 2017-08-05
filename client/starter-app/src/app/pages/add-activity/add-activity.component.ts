import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
@Component({
  selector   : 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls  : ['./add-activity.component.scss']
})
export class AddActivityComponent implements OnInit {
  activities     : any[] = [];
  showEditable   : boolean = false;
  editActivityId : any;
  activityValues : any[];
  actualHourTotal: number;
  addRowDisable  : boolean = false;
  postActivities(activities) {
    console.log(activities, "post")

  }

  remove(activity) {
    let index = this.activities.indexOf(activity);
    this.activities.splice(index, 1);
    console.log(this.activities, "removed")
    this.actualHourTotal = 0;
    for (var i = 0; i < this.activities.length; i++) {
      this.actualHourTotal += Number(this.activities[i].actual_hours);
      if (this.actualHourTotal >= 8) {
        console.log(this.actualHourTotal, "if")
        this.addRowDisable = true;
      }
      else {
        this.addRowDisable = false;
      }
      console.log(this.actualHourTotal, "activities.lenght")
    };
  }
  constructor(private _http: Http) { this.activities = arr; }

  ngOnInit() {
    this._http.get('http://10.0.1.30:8080/api/employees/activities').subscribe((res: Response) => {
      this.activityValues = res.json()
  });


  }

  addRow() {
 
    this.actualHourTotal = 0;
    this.activities.push({
      project_id: null, planned_hours: Number(), activity_id: null, actual_hours: Number(), employee_id: null
    })
  
    for (var i = 0; i < this.activities.length; i++) {
      this.actualHourTotal += Number(this.activities[i].actual_hours);
      if (this.actualHourTotal >= 8) {
       
        this.addRowDisable = true;
      }
     
    };
  }

  toggle(val) {
    this.editActivityId = val;
  }

}

export const arr = [];



