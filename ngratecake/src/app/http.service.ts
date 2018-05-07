import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){

  }

  getPhotos(){
    return this._http.get('/photos');
  }

  getPhoto(id: string) {
    return this._http.get('/photos/' + id)
  }

  addPhoto(newPhoto) {
    return this._http.post('/photos', newPhoto);
  }

  addComment(id:string, newComment) {
    return this._http.post('/comments/' + id, newComment);
  }

}
