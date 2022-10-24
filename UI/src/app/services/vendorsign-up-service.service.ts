import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from 'src/models/Vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorsignUpServiceService {

  constructor(private http: HttpClient) { }

  public vendorSignup(vendor: Vendor) : Observable<any> {
    let vendorObj = {
      name: vendor.name,
      contact_number: vendor.contact_number,
      user: {
        email: vendor.email,
        password: vendor.password
      }
    }

    return this.http.post('http://localhost:7805/vendor/add', vendorObj);
  }
}
