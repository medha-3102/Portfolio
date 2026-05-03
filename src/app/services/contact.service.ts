import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private endpoint = 'YOUR_API_ENDPOINT';

  constructor(private http: HttpClient) {}

  sendMessage(payload: any): Observable<any> {
    return this.http.post(this.endpoint, payload);
  }
}