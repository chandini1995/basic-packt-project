import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { CountriesService } from '../countries.service'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  data: any;
data1:any

  urlJsonPublic: string = "https://jsonplaceholder.typicode.com/users";
  // url: string = "http://dummy.restapiexample.com/api/v1/employee/1";
  url:string="https://reqres.in/api/users?page=2";

  constructor(private _service: CountriesService,
    private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getJsonUser();
    this.getUrl();
  }
  getJsonUser() {
    this.http.get(this.urlJsonPublic).subscribe(
      (res) => {
        console.log("res", res);
        this.data = res;
      },
      (err) => {
        console.log("err", err);
      }
    )
  }

  getUrl() {
    this.http.get(this.url).subscribe(
      (res)=>{
        console.log("res",res);
        this.data1=res;
      } ,
      (err)=>{
        console.log("err",err);
      }
    )
  }

}
