import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-showdetail',
  templateUrl: './showdetail.component.html',
  styleUrls: ['./showdetail.component.css']
})
export class ShowdetailComponent implements OnInit {
  @Input() thePhoto: any;
  constructor() { }

  ngOnInit() {
    // console.log(this.thePhoto);
    
  }
  ngOnC

}
