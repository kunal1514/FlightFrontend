import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFlightComponent } from './components/add-flight/add-flight.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CustomerSignUpComponent } from './components/auth/customer-sign-up/customer-sign-up.component';
import { UserloginComponent } from './components/auth/userlogin/userlogin.component';
import { VendorSignUpComponent } from './components/auth/vendor-sign-up/vendor-sign-up.component';
import { EditFlightComponent } from './components/edit-flight/edit-flight.component';
import { HomeComponent } from './components/home/home.component';
import { VendorDashboardComponent } from './components/vendor-dashboard/vendor-dashboard.component';
import { ViewBookingsComponent } from './components/view-bookings/view-bookings.component';
import { ViewCustomersComponent } from './components/view-customers/view-customers.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'customer/signup', component: CustomerSignUpComponent},
  {path: 'vendor/signup', component: VendorSignUpComponent},
  {path: 'login', component: UserloginComponent},
  {path: 'vendor/dashboard', component: VendorDashboardComponent},
  {path: 'vendor/add/flight', component: AddFlightComponent},
  {path: 'vendor/view/bookings', component: ViewBookingsComponent},
  {path: 'vendor/edit/flight', component: EditFlightComponent},
  {path: 'admin/dashboard', component: AdminDashboardComponent},
  {path: 'admin/view/customers', component: ViewCustomersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
