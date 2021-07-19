import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
const baseUrl : any = 'http://localhost:3000';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  public callUpdateEndpoint(data:any){
    return this.http.post(baseUrl + '/student',data);
  }

  
}

