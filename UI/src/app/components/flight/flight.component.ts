import { Component, OnInit } from '@angular/core';
import { FlightServiceService } from 'src/app/services/flight-service.service';
import { Flight } from 'src/models/Flight';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  flights: Flight[];

  constructor(private flightService: FlightServiceService) { }

  ngOnInit(): void {
    this.flightService.getAllFlights().subscribe(data => {
      console.log(data);
      this.flights = data;
    })
  }

}
