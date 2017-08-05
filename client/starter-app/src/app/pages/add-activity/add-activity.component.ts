import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import { Router, ActivatedRoute} from '@angular/router';

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
  projectId: any;
  date: any;
  employeeId: any;
  status: any;
  actualHourTotal: number;
  addRowDisable  : boolean = false;
  postResponse   : any;

  constructor(private _http: Http, private router: Router, private route: ActivatedRoute) { this.activities = arr; }
  
  remove(activity) {
    let index = this.activities.indexOf(activity);
    this.activities.splice(index, 1);
    this.actualHourTotal = 0;
    for (var i = 0; i < this.activities.length; i++) {
      this.actualHourTotal += Number(this.activities[i].actual_hours);
      if (this.actualHourTotal >= 8) {
    
        this.addRowDisable = true;
      }
      else {
        this.addRowDisable = false;
      }
   
    };
  }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.projectId = data.projectId;
      this.date = data.date;
      this.status = data.status;
      this.employeeId = data.employeeId;
    });
    this._http.get('http://10.0.1.30:8080/api/employees/activities').subscribe((res: Response) => {
      this.activityValues = res.json()
  });
  }


    postActivities(activities) {
    
      this._http.post('http://10.0.1.30:8080/api/employees/timesheet',activities).subscribe((res: Response) => {
      this.postResponse = res.json()
      if(this.postResponse.Message == 'Success'){
        this.router.navigate(['weekly-ts', this.projectId]);
      }
      });
  
  }


  addRow() {
 
    this.actualHourTotal = 0;
    this.activities.push({
      date_for_timesheet:this.date, project_id: this.projectId, planned_hours: Number(), activity_id: null, actual_hours: Number(), employee_id: this.employeeId, status: this.status
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



