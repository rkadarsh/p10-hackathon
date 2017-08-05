import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'People10 | PMO';
  httpResponse:any;

  constructor(private http:Http){

  }

  ngOnInit()
  {
  }

}
