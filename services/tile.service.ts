import { Injectable } from '@angular/core';
import { ITile } from '../interfaces/itile';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TileService {

  tiles:Array<ITile>;
  tileAPIURL : string = "http://demo5911200.mockable.io/tiles";
  constructor(private _httpClient:HttpClient) { }

  getTileData():Observable<ITile[]>{
    return this._httpClient.get<ITile[]>(this.tileAPIURL);
  }

  getTile(Id:number):Observable<ITile>{

    return this._httpClient.get<ITile>(this.tileAPIURL + `/${Id}`);

  }

  
}
