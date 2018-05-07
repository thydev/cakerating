import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() thePhoto: any;
  @Output() ratePhoto = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  onRating(){

  }
}
