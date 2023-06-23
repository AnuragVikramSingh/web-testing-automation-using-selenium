import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  responseData: any = {}
  animals: string[] = []

  constructor(private http : HttpClient){}

  title = 'angular-sample-app';
  usersBaseURL = 'https://j6aqyirc42.execute-api.ap-southeast-1.amazonaws.com/prod/api/animals'

  ngOnInit(): void {
    this.http.get(this.usersBaseURL)
    .subscribe(Response => {

      if(Response){ 
        this.responseData = Response
        this.animals = this.responseData.animals
      }
    });
  }

}