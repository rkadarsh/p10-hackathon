import { Injectable } from '@angular/core';
import {  Http,Response,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import * as moment from 'moment';

@Injectable()
export class WeeklyTsService {

  constructor(private http : Http) { }

  private apiURL = 'http://10.0.1.30:8080/api/'

  postDate(val){
      let postObject = {
        'startDate': '',
        'toDate': ''
      };
      postObject.startDate = moment().month(val.month - 1).date(val.range[0]).format('YYYY-MM-DD');
      postObject.toDate = moment().month(val.month - 1).date(val.range[1]).format('YYYY-MM-DD');
      return this.http.post(this.apiURL + 'employees/timesheet', postObject)
        .map((response:Response) => response.json());
    }

}
