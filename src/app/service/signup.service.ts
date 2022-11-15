import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';        //registered

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  //Service API call
  // private url: string = 'url dalna hai' 
  url: string = "http://localhost:3000/user";

  constructor(private http: HttpClient) { }

  // sending data 
  sendData(signInForm: any) {
    console.log(signInForm, 'Service call')
    return this.http.post(this.url + '/login', signInForm);  //this data is send to backend through api
  }

  //comming data
  getData() {
    return this.http.get(this.url + '/info_login');  //this data=[{name:'xyz', dob:'03/03/13'}] is come from backend api

  }
  
}