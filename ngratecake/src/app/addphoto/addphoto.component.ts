import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addphoto',
  templateUrl: './addphoto.component.html',
  styleUrls: ['./addphoto.component.css']
})
export class AddphotoComponent implements OnInit {
  @Input() newPhoto: any;

  @Output() addPhoto = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onAddPhoto() {
    console.log("on submit");
    this.addPhoto.emit();
  }
}
