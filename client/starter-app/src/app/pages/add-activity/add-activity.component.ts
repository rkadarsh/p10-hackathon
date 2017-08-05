import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import {ProjectService} from '../../pages/project/project.component.service';
import { FlashMessagesService } from 'angular2-flash-messages';

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
  postResponse   : any;
  projectId      : any;
  



  

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


  constructor(private _http: Http,private projectService: ProjectService,private _flashMessagesService: FlashMessagesService) { this.activities = arr; }

  ngOnInit() {
    this._http.get('http://10.0.1.30:8080/api/employees/activities').subscribe((res: Response) => {
      this.activityValues = res.json()
  });
    this.projectId = this.projectService.getProjectId();
  }


    postActivities(activities) {
    
      this._http.post('http://10.0.1.30:8080/api/employees/timesheet',activities).subscribe((res: Response) => {
      this.postResponse = res.json()
      if(this.postResponse.Message == 'Success'){
   
      }
      });
  
  }


  addRow() {
 
    this.actualHourTotal = 0;
    this.activities.push({
      project_id: 1, planned_hours: Number(), activity_id: null, actual_hours: Number(), employee_id: 1, status: 0
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



