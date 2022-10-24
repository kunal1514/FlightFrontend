import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from 'src/models/Vendor';

@Injectable({
  providedIn: 'root'
})
export class AdmindashboardService {

  constructor(private http: HttpClient) { }

  public getAllVendors() : Observable<Vendor[]> {
    return this.http.get<Vendor[]>('http://localhost:7805/vendor/getAll');
  }
}
