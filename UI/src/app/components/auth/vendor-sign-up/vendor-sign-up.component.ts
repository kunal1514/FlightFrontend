import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VendorServiceService } from 'src/app/services/vendor-service.service';
import { VendorsignUpServiceService } from 'src/app/services/vendorsign-up-service.service';
import { Vendor } from 'src/models/Vendor';

@Component({
  selector: 'app-vendor-sign-up',
  templateUrl: './vendor-sign-up.component.html',
  styleUrls: ['./vendor-sign-up.component.css']
})
export class VendorSignUpComponent implements OnInit {

  signupForm: FormGroup;

  msg: string;

  constructor(private vendorSignupsService: VendorsignUpServiceService) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}$/)])
    })
  }

  onFormSubmit = () => {
    console.log(this.signupForm);
    let vendor: Vendor = {
      name: this.signupForm.value.name,
      contact_number: this.signupForm.value.phone,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password
    }

    this.vendorSignupsService.vendorSignup(vendor).subscribe({
      next : (data) => {
        this.msg = "Vendor Signup successfully.."
      },
      error : (err) => {
        this.msg = "Something went wrong. Please try again"
      }
    })

  }

}
