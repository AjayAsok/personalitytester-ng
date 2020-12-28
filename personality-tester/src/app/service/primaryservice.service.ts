import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { SAMPLEDATA } from '../data/sampleData'

@Injectable({
  providedIn: 'root'
})
export class PrimaryserviceService {
  constructor(private http: HttpClient) { }
  resolveItems(): Observable<any> {
    console.log('Request is sent!');
    let val = SAMPLEDATA;
    return of(val);
  }
}
