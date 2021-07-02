import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private _httpClient:HttpClient) { }
  public getCustomers():any{
    return this._httpClient.get('https://w3schools.com/angular/customers.php')
  }
}
