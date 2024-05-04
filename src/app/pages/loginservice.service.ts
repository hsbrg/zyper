import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http: HttpClient) { }

  handlePostRequest(data: any): Observable<any> {
    const url = 'https://api.zyper.ai/crm/logingoogle/';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(url, data, { headers });
  }
}