import { Component, OnInit, Input } from '@angular/core';
import { ITile } from '../interfaces/itile';
import { TileService } from '../services/tile.service';

@Component({
  selector: '[app-tile]',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {

 @Input() tile:ITile;
 
 imagePath: string = "/assets/images/";
  constructor() {
   
   }

  ngOnInit() {
   
  }

  updateRatingToDb(message){
    console.log("data from the child compoent is " +message );
  }

}
