import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddphotoComponent } from './addphoto/addphoto.component';
import { RatingComponent } from './rating/rating.component';
import { ShowdetailComponent } from './showdetail/showdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    AddphotoComponent,
    RatingComponent,
    ShowdetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
