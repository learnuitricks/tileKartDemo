import { Component, OnInit } from '@angular/core';
import { ITile } from '../interfaces/itile';
import { ActivatedRoute, Router } from '@angular/router';
import { TileService } from '../services/tile.service';

@Component({
  selector: 'app-tile-detail',
  templateUrl: './tile-detail.component.html',
  styleUrls: ['./tile-detail.component.css']
})
export class TileDetailComponent implements OnInit {
  tile:ITile;
Id:number;

imageUrl:string = 'assets/images/';
  constructor(private _activateRoute:ActivatedRoute,private _tileService:TileService,private __router:Router) { }

  ngOnInit() {
      this.Id = +this._activateRoute.snapshot.paramMap.get('Id');
      console.log(`parameter received is ${this.Id}`);
      this._tileService.getTile(this.Id).subscribe(
        (tile) => {
          this.tile = tile;
        }
      )
  }
  navigateBack(){
    this.__router.navigate(['/tiles']);
  }
 

}
