import { Injectable } from '@angular/core';
import {  Http,Response,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';

@Injectable()
export class LoginService {

  private employee:any;

  constructor(private http : Http) { }

  private apiURL = 'http://10.0.1.30:8080/api/'

    login(val){
      return this.http.post(this.apiURL + 'employees/login', val)
        .toPromise()
        .then(res => res.json());
    }
    
    setEmployee(data) {
      this.employee = data;
    }

    getEmployee() {
      return this.employee;
    }

}
