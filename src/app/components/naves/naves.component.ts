import { Component, OnInit } from '@angular/core';
import { VechilesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-naves',
  templateUrl: './naves.component.html',
  styleUrls: ['./naves.component.css'],
  providers: [VechilesService]
})
export class NavesComponent implements OnInit {

  public title: string;
  public starships: any;
  public name: string;
  public model: string;
  public manufacturer: string;
  public crew: string;
  public length: string;
  public consumables: string;
  public names: Array<string>;

  constructor(
    private _service: VechilesService 
  ) { 
    this.title = "Naves";
    this.names = [];
  }

  ngOnInit() {
    this._service.getStarships().subscribe(

      response => {
        let res: any;
        res = response;
        this.starships = res.results;
        for(let i in this.starships){
          this.names.push(this.starships[i].name);
        }
        this.getStarship(2);
        console.log(this.starships);
      },
      error => {
        console.log(error);
      }
    ); 
  }

  getStarship(id: number){
    console.log(this.names);
    try {
      this.name = this.starships[id].name;
      this.model = this.starships[id].model;
      this.manufacturer = this.starships[id].manufacturer;
      this.crew = this.starships[id].crew;
      this.length = this.starships[id].length;
      this.consumables = this.starships[id].consumables;
    } catch(err) {
      console.log(err);
    }    
  }
  
  findStarship(name: string){
    console.log(this.names);
    let index: number = this.names.indexOf(name);
    console.log(index);
    if(index === -1){
      alert("Starship not found...");
    } else {
      this.getStarship(index);
    }
  }
}
