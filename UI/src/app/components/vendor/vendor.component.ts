import { Component, OnInit } from '@angular/core';
import { VendorServiceService } from 'src/app/services/vendor-service.service';
import { Vendor } from 'src/models/Vendor';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  vendors: Vendor[];

  constructor(private vendorService: VendorServiceService) { }

  ngOnInit(): void {
    this.vendorService.getAllVendors().subscribe(data=>{
      console.log(data)
      this.vendors = data;
    })
  }

}
