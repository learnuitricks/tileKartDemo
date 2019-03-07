import { Component, OnInit, IterableDiffers } from '@angular/core';
import {ITile} from  '../interfaces/itile';
import { TileService } from '../services/tile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {

  imagePath: string = "/assets/images/";

  filterOptions: Array<string> = ["name", "model", "price"];
  selectedFilter: string = "name";
  filterText: string = "";
  filteredTiles : ITile[];
  tiles: Array<ITile>;

  constructor(private tileService:TileService, private router:Router) { 
    this.filteredTiles = this.tiles;
  }

  ngOnInit() {
    // check whether user is logged in, if not redirect him to login page
      this.tileService.getTileData().subscribe(
        tiles =>{
          this.tiles = tiles;
          this.filteredTiles = this.tiles;
        }
      );
  }

  
 filter(){

  this.filteredTiles = this.getFilteredTiles(this.selectedFilter,this.filterText);
   
 }

 getFilteredTiles(filterOption,filterText){
   var tempTiles : ITile[] = this.tiles.filter(function(tile){
     var isMatch:boolean = false;
    switch (filterOption) {
      case "name":
      if (tile.name.toLocaleUpperCase().indexOf(filterText.toLocaleUpperCase()) >= 0) {
        isMatch = true;
        return isMatch;
      }
        break;
    case "price": 
    if (tile.price >  Number(filterText)) {
      isMatch = true;
      return isMatch;
    }
      default:
        break;
    }
    return isMatch;
   });
   return tempTiles;
 }


}
