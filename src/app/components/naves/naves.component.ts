import { Component, OnInit } from '@angular/core';
import { VechilesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-naves',
  templateUrl: './naves.component.html',
  styleUrls: ['./naves.component.css'],
  providers: [VechilesService]
})
export class NavesComponent implements OnInit {

  public vehicles: any;

  constructor(
    private _service: VechilesService 
  ) { }

  ngOnInit() {
    this._service.getVehicles().subscribe(

      response => {
        this.vehicles = response;
        console.log(this.vehicles);
      },

      error => {
        console.log(error);
      }

    );
  }


}
