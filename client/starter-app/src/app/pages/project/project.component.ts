import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {  Http,Response,Headers} from '@angular/http';
@Component({
  selector   : 'app-project',
  templateUrl: './project.component.html',
  styleUrls  : ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

      

    projects: any[];
    constructor(private _http:Http, private router: Router) { }


  ngOnInit() {


  this._http.get('http://10.0.1.30:8080/api/employees/projects/1').subscribe((res:Response) => {
    this.projects = res.json()

  });

  }

  projectclick(project) {
    this.router.navigate(['/weekly-ts/', project.project_id]);
  }

}

