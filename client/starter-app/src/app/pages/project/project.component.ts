import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  Http,Response,Headers} from '@angular/http';
import {ProjectService} from './project.component.service';
@Component({
  selector   : 'app-project',
  templateUrl: './project.component.html',
  styleUrls  : ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
    projects: any[]
    constructor(private _http:Http,private projectService: ProjectService) { }
    projectclick(project){
      this.projectService.setProjectId(project.project_id)
     
      

    }
  ngOnInit() {

  this._http.get('http://10.0.1.30:8080/api/employees/projects/1').subscribe((res:Response) => {
    this.projects = res.json()
  });

  }

}

