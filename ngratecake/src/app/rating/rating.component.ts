import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() thePhoto: any;
  @Output() addRatingEmitter = new EventEmitter();
  @Output() showDetailEmitter = new EventEmitter();

  newRating: any;

  constructor() { }

  ngOnInit() {
    this.newRating = {rating: 1, contents: ""}
  }

  onRating(){
    this.addRatingEmitter.emit({
      id: this.thePhoto._id, 
      aRating: this.newRating
    });
    this.newRating = {rating: 1, contents: ""}
  }

  onShowDetail(){
    console.log("image was clicked")
    this.showDetailEmitter.emit(this.thePhoto);
  }

}
