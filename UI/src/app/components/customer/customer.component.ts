import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from 'src/app/services/customer-service.service';
import { Customer } from 'src/models/Customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: Customer[];
  constructor(private customerService : CustomerServiceService) { }

  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe(data => {
      console.log(data);
      this.customers = data;
    }, err => {
      console.log("ERROR :", err.message);
    })
  }

}
