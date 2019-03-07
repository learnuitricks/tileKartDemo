import { Component, OnInit, Input, OnChanges,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit,OnChanges {

  constructor() { }
   @Input() rating;
   ratingWidth:number=65;
  @Output() ratingClicked:EventEmitter<string>= new EventEmitter();

  ngOnInit() {
  }
  ngOnChanges(){
this.ratingWidth  = this.rating * 65/5;
  }

  starUpdated(){
    console.log("rating has been updated");
    this.ratingClicked.emit("the rating has been updated from 2 to 3");
  }

}
