import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VendorComponent } from './components/vendor/vendor.component';
import { CustomerComponent } from './components/customer/customer.component';
import { FlightComponent } from './components/flight/flight.component';
import { BookingComponent } from './components/booking/booking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { VendorSignUpComponent } from './components/auth/vendor-sign-up/vendor-sign-up.component';
import { CustomerSignUpComponent } from './components/auth/customer-sign-up/customer-sign-up.component';
import { UserloginComponent } from './components/auth/userlogin/userlogin.component';
import { VendorDashboardComponent } from './components/vendor-dashboard/vendor-dashboard.component';
import { AddFlightComponent } from './components/add-flight/add-flight.component';
import { ViewBookingsComponent } from './components/view-bookings/view-bookings.component';
import { EditFlightComponent } from './components/edit-flight/edit-flight.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ViewCustomersComponent } from './components/view-customers/view-customers.component';

@NgModule({
  declarations: [
    AppComponent,
    VendorComponent,
    CustomerComponent,
    FlightComponent,
    BookingComponent,
    NavbarComponent,
    HomeComponent,
    VendorSignUpComponent,
    CustomerSignUpComponent,
    UserloginComponent,
    VendorDashboardComponent,
    AddFlightComponent,
    ViewBookingsComponent,
    EditFlightComponent,
    AdminDashboardComponent,
    ViewCustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
