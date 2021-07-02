import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  urlJsonPublic : string = "https://jsonplaceholder.typicode.com/users";
  // url:string="https://dummy.restapiexample.com/api/v1/employee/1"
  url:string="https://reqres.in/api/users?page=2";

  
  constructor(private _httpClient: HttpClient) { }

  getUserData(): any{
    this._httpClient.get(this.urlJsonPublic).subscribe();
  }
  getData():any{
this._httpClient.get(this.url).subscribe();
  }
}