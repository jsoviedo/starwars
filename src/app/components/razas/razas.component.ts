import { Component, OnInit } from '@angular/core';
import { SpeciesService } from 'src/app/services/species.service';
import { Specie } from 'src/app/models/specie';

@Component({
  selector: 'app-razas',
  templateUrl: './razas.component.html',
  styleUrls: ['./razas.component.css']
})
export class RazasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
