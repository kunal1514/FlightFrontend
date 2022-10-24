import { Component, OnInit } from '@angular/core';
import { AdmindashboardService } from 'src/app/services/admindashboard.service';
import { Vendor } from 'src/models/Vendor';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  vendors : Vendor[];

  constructor(private adminService: AdmindashboardService) { }

  ngOnInit(): void {
    this.adminService.getAllVendors().subscribe(data => {
      console.log(data);
      this.vendors = data;
    })
  }

}
