import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Cake Rating App';
  photos: any;
  newPhoto: any;
  selectedPhoto: any;
  isShowDetail = false;

  constructor(private _httpService: HttpService){
    this.getPhotos();
    this.newPhoto = {author: "", image_url: ""};
  }

  getPhotos() {
    const obsPhotos = this._httpService.getPhotos();
    obsPhotos.subscribe(data => {
      console.log(data);
      this.photos = data['data'];
    });
  }

  addPhoto() {
    console.log('inside addPhoto main component');
    const obsPhoto = this._httpService.addPhoto(this.newPhoto);
    obsPhoto.subscribe(data => {
      console.log(data);
      this.newPhoto = {author: "", image_url: ""}
      this.getPhotos();
    });
  }

  addRating(event){
    console.log(event);
    const obsPhoto = this._httpService.addComment(event.id, event.aRating);
    obsPhoto.subscribe(data => {
      console.log(data);
    });
  }

  showPhoto(aPhoto: any) {
    console.log("detail on root")
    if (aPhoto.comments.length > 0){
      let sum = 0;
      aPhoto.comments.forEach(r => {
        sum += r.rating;
      });
      aPhoto.avgRating = sum / aPhoto.comments.length;

    }
    this.isShowDetail = true;
    this.selectedPhoto = aPhoto;
  }

}
