import { Injectable } from '@angular/core';
import {  Http,Response,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';

@Injectable()
export class WeeklyTsService {

  constructor(private http : Http) { }

  private apiURL = 'http://10.0.1.30:8080/api/'

    postDate(val){
      return this.http.post(this.apiURL + 'employees/timesheetRetrieval', val)
        .toPromise()
        .then(res => console.log(res));
    }

}
